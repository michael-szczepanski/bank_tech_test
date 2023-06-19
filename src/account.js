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
    const transaction = new Transaction(date, null, amount, this.balance);
    this.transactions.push(transaction);
  }

  printStatement = () => {
    let statement = "date || credit || debit || balance\n"
    statement += (
      this.transactions
        .reverse()
        .map(transaction => transaction.toString())
        .join("\n")
    );
    return statement;
  }
}

module.exports = Account;