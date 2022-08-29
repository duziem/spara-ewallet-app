using System.Text.Json.Serialization;

namespace WalletApi.Entities
{
    public class WalletAccount
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string AccountNumber { get; set; }

        public int AccountId { get; set; }


        //public int balance { get; set; }

        //public decimal amount { get; set; }

        public decimal Balance { get; set; }

        public Gender Gender { get; set; }

        public string? Bvn { get; set; }

        public string Address1 { get; set; }

        public string? Address2 { get; set; }

        public string DateOfBirth { get; set; }

        public HowDidYouHearAboutUs HowDidYouHearAboutUs { get; set; }

        public string PhoneNumber1 { get; set; }

        public string? PhoneNumber2 { get; set; }

        public string Country { get; set; }

        public string State { get; set; }

        public string LocalGovernment { get; set; }

        public string PostalCode { get; set; }

        public bool AcceptTerms { get; set; }

        public DateTime Created { get; set; }

        public DateTime? Updated { get; set; }

        /*[JsonIgnore]*/
        public Account Account { get; set; }

        public List<Transaction> Transactions { get; set; }

        public List<Card> Cards { get; set; }
    }
}
