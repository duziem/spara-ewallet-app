namespace WalletApi.Models.Paystack
{
    public class RequestToPaystackChargeApi
    {

        public string Email { get; set; }
        public int Amount { get; set; }

        public PaystackCard Card { get; set; }

    }
}
