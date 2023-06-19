class Transaction {
  constructor(date, credit, debit, balance) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  toString = () => {
    let transactionString = 
      `${this.date.toLocaleDateString()} || `
      + `${this.credit} || `
      + `${this.debit} || `
      + `${this.balance}`
    return transactionString;
  }
}

module.exports = Transaction;