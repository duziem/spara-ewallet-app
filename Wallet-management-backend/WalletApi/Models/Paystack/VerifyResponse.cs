public class Customer
{
    public string Email { get; set; }

    public string First_name { get; set; }

    public string Last_name { get; set; }

    public string Phone { get; set; }

}
public class VerifyData
{
    public Customer Customer { get; set; }
    public string Status { get; set; }

    public DateTime CreatedAt { get; set; }

    public int Amount { get; set; }
    /*public string Reference { get; set; }*/
}

namespace WalletApi.Models.Paystack
{
    public class VerifyResponse
    {
        public bool Status { get; set; }

        public string Message { get; set; }

        public VerifyData Data { get; set; }
    }
}
