using WalletApi.Entities;

namespace WalletApi.Models.WalletAccounts
{
    public class WalletAccountResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int AccountNumber { get; set; }

        public int AccountId { get; set; }

        public decimal Balance { get; set; }

        public Gender Gender { get; set; }

        //public string Gender { get; set; }

        public string Bvn { get; set; }

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
    }
}
