using Microsoft.AspNetCore.Http;
using WalletApi.Authorization;
using Microsoft.AspNetCore.Mvc;
using WalletApi.Entities;
using WalletApi.Models.Paystack;

namespace WalletApi.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class CardsController : BaseController
    {
        private readonly DataContext _context;

        public CardsController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddCard(CardRequest model)
        {
            var card= new Card()
            {
                CardNumber = model.CardNumber,
                /*Amount = model.Amount,*/ // remove the amount column
                Cvv = model.Cvv,
                Email = model.Email,
                Expiry_month = model.Expiry_month,
                Expiry_year = model.Expiry_year,
                WalletAccountId= Account.Id
            };

            await _context.Cards.AddAsync(card);
            await _context.SaveChangesAsync();

            return Ok(new { message="card added successfully"});

    }

        [HttpGet]
        public async Task<IActionResult> GetCards()
        {
            // get all cards
            var cards= await _context.Cards.Include(c => c.WalletAccount).ToListAsync();
            return Ok(cards);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetCard(int id, int accountId)
        {
            // get a single card
            if (accountId != Account.Id && Account.Role != Role.Admin)
                return Unauthorized(new { message = "Unauthorized" });

            var card = getCard(id);
            return Ok(card);

        }

        // helper function
        private async Task<Card> getCard(int id)
        {
            var card = await _context.Cards.FindAsync(id);
            if (card == null) throw new KeyNotFoundException("Account not found");
            return card;
        }
    }
}
