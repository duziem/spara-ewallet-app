using Microsoft.EntityFrameworkCore;
//using WalletApi.Models;
using WalletApi.Entities;

namespace WalletApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Account> Accounts { get; set; }
        public DbSet<WalletAccount> WalletAccounts { get; set; }

        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<Card> Cards { get; set; }
        //public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<WalletAccount>().Property(x => x.Balance).HasPrecision(18, 2);
        }
    }
}
