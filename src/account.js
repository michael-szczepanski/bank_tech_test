class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  addDeposit = (amount, date) => {
    this.balance += amount;
  }

  addWithdrawal = (amount, date) => {
    this.balance -= amount;
  }

  printStatement = () => {
    return 'date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00'
  }
}

module.exports = Account;