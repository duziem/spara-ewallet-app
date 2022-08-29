namespace WalletApi.Models.Paystack
{
    public class PaystackCard
    {
        public string Number { get; set; }
        public string Cvv { get; set; }
        public string Expiry_year { get; set; }

        public string Expiry_month { get; set; }
    }
}
