using System.ComponentModel.DataAnnotations;

namespace WalletApi.Models.Accounts
{
    public class VerifyEmailRequest
    {
        [Required]
        public string Token { get; set; }
    }
}
