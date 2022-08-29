﻿namespace WalletApi.Entities
{
    public class Account
    {
        public int Id { get; set; }
        //public string Title { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        /*public bool AcceptTerms { get; set; }*/
        public Role Role { get; set; }
        public string? VerificationToken { get; set; }
        public DateTime? Verified { get; set; }
        public bool IsVerified => Verified.HasValue || PasswordReset.HasValue;
        public string? ResetToken { get; set; }
        public DateTime? ResetTokenExpires { get; set; }
        public DateTime? PasswordReset { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Updated { get; set; }

        /*public string? Lat { get; set; }*/ // latitude

        /*public string? Log { get; set; }*/ // longtitude
        public List<RefreshToken> RefreshTokens { get; set; }

        /*public int? WalletAccountId { get; set; }*/

        public WalletAccount WalletAccount { get; set; }

        public bool OwnsToken(string token)
        {
            return this.RefreshTokens?.Find(x => x.Token == token) != null;
        }
    }
}
