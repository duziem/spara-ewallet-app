using AutoMapper;
using WalletApi.Authorization;
//using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;
using WalletApi.Entities;
using WalletApi.Helpers;
using WalletApi.Models.WalletAccounts;
using WalletApi.Models.Paystack;
using System.Text.Json;

namespace WalletApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]

    // remember to add an authorize attribuute to this class afterwards
    public class WalletsController : BaseController
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        private readonly IHttpClientFactory _httpClientFactory;

        public WalletsController(DataContext context, IMapper mapper, IHttpClientFactory httpClientFactory)
        {
            _context = context;
            _mapper = mapper;
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var wallets = await _context.WalletAccounts.Include(w => w.Account).ToListAsync();
            return Ok(wallets);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetById(int id)
        {
            var accountId = id > 0 ? id : Account.Id;
            var walletAccount = await _context.WalletAccounts.FirstOrDefaultAsync(x => x.Account.Id == accountId);

            return Ok(walletAccount);
        }

        /* [HttpGet]
         public async Task<ActionResult> GetAccount(string accountNumber)
         {
             WalletAccount wallet = null;
             try
             {
                 wallet = await _context.WalletAccounts.FirstOrDefaultAsync(w => w.AccountNumber == accountNumber);

             }catch(Exception ex)
             {
                 throw new AppException("something went wrong. try again");
             }
             return Ok(wallet);

         }*/

        [HttpPost("create-account")]
        public async Task<IActionResult> CreateAccount(CreateWalletAccountRequest model)
        {
            /*            if (id != Account.Id && Account.Role != Role.Admin)
                            return Unauthorized(new { message = "Unauthorized" });*/

            // validate
            /*if (_context.WalletAccounts.Any(x => x.AccountId == model.AccountId))*/
            if (_context.WalletAccounts.Any(x => x.AccountId == Account.Id))
            {
               /* return StatusCode(StatusCodes.Status409Conflict, new { message = "The wallet account already exists" });*/
                throw new AppException("The wallet account already exists");
            }
            // get the account id from the token
            // how to get the token - another option is getting the id from the url {http://localhost:4000/api/wallets/create-wallet/:id} 


            // get a single account 
            var account = await _context.Accounts.FirstOrDefaultAsync(x => x.Id == Account.Id);

            if (account == null)
            {
                return NotFound();
            }
            // var account = await _context.Accounts.SingleOrDefaultAsync();
            // generate a 10 digit account number using random - also find out how to use Guid to do this
            var accountNum = generateAccountNumber(listWalletAccounts());

            // map the request to the Accounts entity to fill in some data from the Accounts entity
            // map model to new WalletAccount object
            var walletAccount = _mapper.Map<WalletAccount>(model);
            walletAccount.AccountNumber = accountNum;
            walletAccount.Balance = 0M;
            walletAccount.AccountId = account.Id;
            walletAccount.Name = account.FirstName + " " + account.LastName;
            walletAccount.Created = DateTime.UtcNow;
            // save it to the database
            await _context.WalletAccounts.AddAsync(walletAccount);
            await _context.SaveChangesAsync();

            // update the Account table with the walletAccountid 
            /*account.WalletAccountId = walletAccount.Id;
            _context.Accounts.Update(account);
            _context.SaveChanges();*/

            return Ok(walletAccount);

            //return Ok("Wallet Account created successfully");
        }


        [HttpPut("{id:int}")]
        /*[ValidateAntiForgeryToken]*/

        public async Task<IActionResult> Update(int id, UpdateWalletRequest model)
        {

            // get a single wallet account 
            var walletAccount = await _context.WalletAccounts.FirstOrDefaultAsync(x => x.Id == id);


            // validate
            /*if (account.Email != model.Email && _context.Accounts.Any(x => x.Email == model.Email))
                throw new AppException($"Email '{model.Email}' is already registered");*/

            // copy model to wallet account and save
            _mapper.Map(model, walletAccount);
            walletAccount.Updated = DateTime.UtcNow;
            _context.WalletAccounts.Update(walletAccount);
            _context.SaveChanges();

            var mappedWallet=  _mapper.Map<WalletAccountResponse>(walletAccount);
            return Ok(mappedWallet);
        }

        [HttpPost("deposit")]

        // when the request is coming from the ui - pass this method a CardRequest type as input
        // Deposit(CardRequest model)
        // use [FromForm] if the input from the UI is coming from a form
        /* public async Task<IActionResult> Deposit([FromForm]CardRequest? model)*/
        public async Task<IActionResult> Deposit(CardRequest model)
        {
            if (model == null)
            {
                return BadRequest(new { message = "please try again" });
            }

            if (model.Amount < 0)
            {
                return BadRequest(new { message = "please try again" });
            }

            var request = new HttpRequestMessage(HttpMethod.Post, "https://api.paystack.co/charge");

            request.Content = new StringContent(JsonSerializer.Serialize(new
            {
                email = model.Email,
                amount = model.Amount,
                card = new
                {
                    number = model.CardNumber,
                    cvv = model.Cvv,
                    expiry_year = model.Expiry_year,
                    expiry_month = model.Expiry_month
                }
            }

            ));

            request.Content.Headers.ContentType = new MediaTypeWithQualityHeaderValue("application/json");

            var client = _httpClientFactory.CreateClient();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Add("Authorization", "Bearer " + "sk_test_792aca2d0a1778a924cf1e828e3f6d0a648edfd6");
            var response = await client.SendAsync(request);

            /*RequestToPaystackChargeApi card = null;*/
            /*Transaction transaction = null;*/
            ChargeCardResponse card = null;

            if (response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStringAsync();
                /*card = responseStream;*/
                /*RequestToPaystackChargeApi card = Newtonsoft.Json.JsonConvert.DeserializeObject<RequestToPaystackChargeApi>(responseStream);*/

                // deserialize the response from the paystack charge api
                /*ChargeCardResponse card = Newtonsoft.Json.JsonConvert.DeserializeObject<ChargeCardResponse>(responseStream); */
                card = Newtonsoft.Json.JsonConvert.DeserializeObject<ChargeCardResponse>(responseStream);

                // select a single wallet account
                var walletAccount = await _context.WalletAccounts.FirstOrDefaultAsync(t => t.AccountId == Account.Id);

                if (walletAccount == null)
                {
                    return NotFound(new { message = "not found" });
                }

                // create a new transaction
                var transaction = new Transaction
                {
                    TransactionType = Txn_type.credit,
                    Purpose = Purpose.deposit,
                    Amount = Convert.ToDecimal(model.Amount),
                    /*Amount = Convert.ToDecimal(card.Data.Amount),*/
                    WalletAccountId = walletAccount.Id,
                    Reference = card.Data.Reference,
                    BalanceBefore = walletAccount.Balance, // get balance from walletAccount
                    BalanceAfter = walletAccount.Balance + Convert.ToDecimal(model.Amount),
                    CreatedAt = DateTime.UtcNow,
                };

                // Add and save the new transaction
                await _context.Transactions.AddAsync(transaction);
                /*await _context.SaveChangesAsync();*/

                // update the walletAccount database
                /*walletAccount.Balance = transaction.BalanceAfter;*/
                walletAccount.Balance = walletAccount.Balance + Convert.ToDecimal(model.Amount);
                _context.WalletAccounts.Update(walletAccount);
                _context.SaveChanges();
            }


            return Ok(new { message = "charge successful" });
            /*return Ok(transaction);*/
        }

        /* [HttpGet("{id:int}")]
         public ActionResult GetId(int id)
         {
             return Ok();
         }*/

        // helper methods

        // list existing wallet accounts
        protected List<WalletAccount> listWalletAccounts()
        {
            var walletAccounts = _context.WalletAccounts.ToList();
            return walletAccounts;
        }

        // generate account number
        protected string generateAccountNumber(List<WalletAccount> walletAccounts)
        {

            Random rand = new Random();
            var accountNum = $"{rand.Next(000000000, 999999999)}";
            // the 
            accountNum = accountNum + new Random(100).Next(0, 10);

            if (walletAccounts.Any(a => a.AccountNumber == accountNum))
            {
                return generateAccountNumber(walletAccounts);
            }
            return accountNum;
        }

    }
}
