using WalletApi.Entities;
using System.ComponentModel.DataAnnotations;

namespace WalletApi.Models.WalletAccounts
{
    public class CreateWalletAccountRequest
    {
        /*public int AccountId { get; set; }*/
        /*public int Id { get; set; }*/
        public Gender Gender { get; set; }

        //public string Gender { get; set; }

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

        [Range(typeof(bool), "true", "true")]
        public bool AcceptTerms { get; set; }
    }
}
