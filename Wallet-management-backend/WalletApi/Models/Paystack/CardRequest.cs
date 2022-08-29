namespace WalletApi.Models.Paystack
{
    public class CardRequest
    {
        /*public int WalletAccountId { get; set; }*/

        public string CardNumber { get; set; }

        public int Amount { get; set; }

        public string Cvv { get; set; }

        public string Email { get; set; }

        public string Expiry_year { get; set; }

        public string Expiry_month { get; set; }
    }
}
