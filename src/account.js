const Transaction = require('./transaction.js');

class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  addDeposit = (amount, date = new Date()) => {
    if (typeof amount !== 'number') return 'amount is not a number';
    if ( !(date instanceof Date) ) return 'date is not a Date object';

    this.balance += amount;
    const transaction = new Transaction(date, amount, null, this.balance);
    this.transactions.push(transaction);
    this.recalculateBalances();
  };

  addWithdrawal = (amount, date = new Date()) => {
    if ( typeof amount !== 'number') return 'amount is not a number';
    if ( !(date instanceof Date) ) return 'date is not a Date object';

    this.balance -= amount;
    const transaction = new Transaction(date, null, amount, this.balance);
    this.transactions.push(transaction);
    this.recalculateBalances();
  };

  printStatement = () => {
    let statement = 'date || credit || debit || balance\n';
    statement += (
      this.transactions
          .reverse()
          .map((transaction) => transaction.toString())
          .join('\n')
    );
    return statement;
  };

  recalculateBalances() {
    let balance = 0;
    this.transactions.forEach((transaction) => {
      balance += transaction.credit;
      balance -= transaction.debit;
      transaction.balance = balance;
    });
  }
}

module.exports = Account;
