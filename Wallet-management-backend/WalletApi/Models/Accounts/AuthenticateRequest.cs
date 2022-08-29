using System.ComponentModel.DataAnnotations;

namespace WalletApi.Models.Accounts
{
    public class AuthenticateRequest
    {
        [Required]
        /*[EmailAddress]*/
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        /*public string? Lat { get; set; }*/ // latitude

        /*public string? Log { get; set; }*/ // longtitude
    }
}
