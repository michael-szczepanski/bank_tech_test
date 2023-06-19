const Transaction = require('./transaction.js');

class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  addDeposit = (amount, date) => {
    this.balance += amount;
    const transaction = new Transaction(date, amount, null, this.balance);
    this.transactions.push(transaction);
  }

  addWithdrawal = (amount, date) => {
    this.balance -= amount;
  }

  printStatement = () => {
    let statement = "date || credit || debit || balance\n"
    statement += (
      this.transactions
        .map(transaction => transaction.toString())
        .join("\n")
    );
    return statement;
  }
}

module.exports = Account;