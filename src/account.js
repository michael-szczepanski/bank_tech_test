class Account {
  constructor() {
    this.transactions = [];
    this.balance = 0;
  }

  addDeposit = (amount, date) => {
    this.balance += amount;
  }
}

module.exports = Account;