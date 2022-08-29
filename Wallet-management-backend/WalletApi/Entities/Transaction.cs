public enum Txn_type
{
    debit,
    credit
}

public enum Purpose
{
    deposit,
    payment
}

namespace WalletApi.Entities
{
    public class Transaction
    {
        public int Id { get; set; }

        public Txn_type TransactionType { get; set; }

        public Purpose Purpose { get; set; }

        public decimal Amount { get; set; }

        public int WalletAccountId { get; set; }
        public string Reference { get; set; }

        public decimal BalanceBefore { get; set; }

        public decimal BalanceAfter { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }

        public WalletAccount WalletAccount { get; set; }
    }
}
