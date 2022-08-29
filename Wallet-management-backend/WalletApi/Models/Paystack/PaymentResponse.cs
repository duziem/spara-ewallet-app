public class InitializeData
{
    public string Authorization_url { get; set; }
    public string Access_code { get; set; }
    public string Reference { get; set; }
}

namespace WalletApi.Models.Paystack
{
    public class PaymentResponse
    {
        public string Message { get; set; }

        public bool Status { get; set; }

        public InitializeData Data { get; set; }
    }
}
