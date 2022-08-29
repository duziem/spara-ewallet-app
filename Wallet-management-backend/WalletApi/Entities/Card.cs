namespace WalletApi.Entities
{
    public class Card
    {
        public int Id { get; set; }

        /*public int WalletAccountId { get; set; }*/

        public string CardNumber { get; set; }

        // do not forget to remove the amount key from the card entity
        public int Amount { get; set; }

        public string Cvv { get; set; }

        public string Email { get; set; }

        public string Expiry_year { get; set; }

        public string Expiry_month { get; set; }

        public int WalletAccountId { get; set; }

        public WalletAccount WalletAccount { get; set; }
    }
}
