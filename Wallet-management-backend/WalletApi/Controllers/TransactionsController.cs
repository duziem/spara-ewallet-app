using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using System.Text.Json;
using WalletApi.Entities;
using WalletApi.Models.Paystack;
using WalletApi.Authorization;



namespace WalletApi.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class TransactionsController : BaseController
    {

        private readonly IHttpClientFactory _httpClientFactory;
        private readonly DataContext _context;

        public TransactionsController(IHttpClientFactory httpClientFactory, DataContext context)
        {
            _httpClientFactory = httpClientFactory;
            _context = context;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetById(int id)
        {
            var accountId = id > 0 ? id : Account.Id;
            var walletAccount= await _context.WalletAccounts.FirstOrDefaultAsync(x => x.Account.Id == accountId);
            var transactions = _context.Transactions.Where(x => x.WalletAccount.Id == walletAccount.Id);
            return Ok(transactions);
        }

        /*        [HttpPost("payment")]
                public async Task<IActionResult> Payment(PaymentRequest model)
                {
                    *//*if (!ModelState.IsValid)*//*
                    if (model == null)
                    {
                        return BadRequest(new { message = "please try again" });
                    }

                    var request = new HttpRequestMessage(HttpMethod.Post, "https://api.paystack.co/charge");


                    // For testing - the property values are hardcoded
                    request.Content = new StringContent(JsonSerializer.Serialize(new
                    {
                        email = model.Email,
                        amount = model.Amount,
                        callback_url = "http://localhost:4000/transactions/verify",
                        reference = generateReference().ToString(),
                        Currency = "NGN"
                    }
                    ));

                    request.Content.Headers.ContentType = new MediaTypeWithQualityHeaderValue("application/json");

                    var client = _httpClientFactory.CreateClient();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    client.DefaultRequestHeaders.Add("Authorization", "Bearer " + "sk_test_792aca2d0a1778a924cf1e828e3f6d0a648edfd6");
                    var response = await client.SendAsync(request);

                    PaymentResponse paymentResponse = new PaymentResponse();
                    *//*PaymentResponse paymentResponse = null;*//*

                    if (response.IsSuccessStatusCode)
                    {
                        var responseStream = await response.Content.ReadAsStringAsync();

                        paymentResponse = Newtonsoft.Json.JsonConvert.DeserializeObject<PaymentResponse>(responseStream);


                        // get a single user account
                        *//*var recipient = await _context.Accounts.Include(a => a.WalletAccount).FirstOrDefaultAsync(a => a.Email == model.Email);
                        *//*
                        // create a new transaction and populate only some columns
                        var transaction = new Transaction()
                        {
                            Reference = paymentResponse.Data.Reference,
                            CreatedAt = DateTime.UtcNow,
                            TransactionType = Txn_type.debit,
                            Purpose = Purpose.payment,
                            Amount = Convert.ToDecimal(model.Amount / 100),
                    };

                        await _context.Transactions.AddAsync(transaction);
                        await _context.SaveChangesAsync();

                        // return the authorization url
                        return Ok(new { url = paymentResponse.Data.Authorization_url });
                    }

                    return NotFound();
                }*/

        [HttpGet("verify")]
        public async Task<IActionResult> Verify(string reference)
        {
            /*return Ok(new { message = "transaction verified" });*/
            var request = new HttpRequestMessage(HttpMethod.Get, $"https://api.paystack.co/transaction/verify/{reference}");
  /*          request.Content.Headers.ContentType = new MediaTypeWithQualityHeaderValue("application/json");*/

            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Add("Authorization", "Bearer " + "sk_test_792aca2d0a1778a924cf1e828e3f6d0a648edfd6");
            var response = await client.SendAsync(request);

            /*Transaction transaction = await _context.Transactions.FirstOrDefaultAsync(t => t.Reference == reference);*/
            VerifyResponse verifyResponse = null;

            if (response.IsSuccessStatusCode)
            {

                
                    // process to update the transaction
                    // the paystack verify response api provides a customer email
                    // that can be used to get the user who is the recipient of the payment
                    //  verifyResponse.data.customer.email
                    var responseStream = await response.Content.ReadAsStringAsync();

                    // deserialize the response from the paystack payment api
                    verifyResponse = Newtonsoft.Json.JsonConvert.DeserializeObject<VerifyResponse>(responseStream);

                    // get the recipient from the paymentResponse using the recipient's email
                    // passed when making the payment
                    var recipientEmail = verifyResponse.Data.Customer.Email;
                    var amountTransferred = verifyResponse.Data.Amount / 100;

                    // get a single user account
                    /*var recipient = await _context.Accounts.Include(a => a.WalletAccount).FirstOrDefaultAsync(a => a.Email == recipientEmail);*/
                var recipientWallet = await _context.WalletAccounts.FirstOrDefaultAsync(x => x.Account.Email == recipientEmail);
                var senderWallet = await _context.WalletAccounts.FirstOrDefaultAsync(x => x.AccountId == Account.Id);

                if (recipientWallet == null)
                {
                    throw new ApplicationException("recipient does not have account");
                }

                if (senderWallet == null)
                {
                    throw new ApplicationException("sender does not have account");
                }


                    // update the balance if the user has sufficient fund;
                    // first convert the balance to an integer
                    var senderWalletBalance = Convert.ToInt32(senderWallet.Balance);
                        if (senderWalletBalance > amountTransferred)
                        {

                        // create a new transaction for the sender
                        var senderTransaction = new Transaction()
                        {
                            TransactionType = Txn_type.debit,
                            Purpose = Purpose.payment,
                            Amount = Convert.ToDecimal(amountTransferred),
                            WalletAccountId = senderWallet.Id,
                            Reference = "sender-" + reference,
                            BalanceBefore = senderWallet.Balance,
                            BalanceAfter = senderWallet.Balance - Convert.ToDecimal(amountTransferred),
                            CreatedAt = DateTime.UtcNow,
                            UpdatedAt = DateTime.UtcNow
                        };

                        // add and save the new transaction
                        _context.Transactions.Add(senderTransaction);
                        /*_context.SaveChanges();*/

                    // update the sender balance - debit the sender
                        senderWallet.Balance = senderWallet.Balance - Convert.ToDecimal(amountTransferred);
                        // update the sender wallet account record
                        _context.Update(senderWallet);
                    /*_context.SaveChanges();*/

                    // create a new transaction for the recipient
                    var recipientTransaction = new Transaction()
                    {
                        TransactionType = Txn_type.credit,
                        Purpose = Purpose.deposit,
                        Amount = Convert.ToDecimal(amountTransferred),
                        WalletAccountId = recipientWallet.Id,
                        Reference = "recipient-" + reference,
                        BalanceBefore = recipientWallet.Balance,
                        BalanceAfter = recipientWallet.Balance + Convert.ToDecimal(amountTransferred),
                        CreatedAt = DateTime.UtcNow,
                        UpdatedAt = DateTime.UtcNow
                    };

                    // add and save the new transaction
                    _context.Transactions.Add(recipientTransaction);


                    // Next, credit the recipient - update the recipient balance
                    recipientWallet.Balance = recipientWallet.Balance + Convert.ToDecimal(amountTransferred);
                        _context.WalletAccounts.Update(recipientWallet);
                        _context.SaveChanges();
                }
                else
                {
                    throw new ApplicationException("insufficient balance");
                }
                    

                    
                

                return Ok(new { message = "transfer successful" });
            }

            // if the code gets to this point it means the operation was not successful
            return NotFound();
        }

        // helper methods
        // generate a unique reference for the transaction
        public int generateReference()
        {
            Random rand = new Random((int)DateTime.Now.Ticks);
            return rand.Next(100000000, 999999999);
        }
    }

}  


