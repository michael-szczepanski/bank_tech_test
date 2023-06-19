class Transaction {
  constructor(date, credit, debit, balance) {
    this.date = date;
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
  }

  toString = () => {
    let transactionString = `${this.date.toLocaleDateString()} || `;
    transactionString += this.credit !== null ? `${this.credit.toFixed(2)} || ` : `|| `;
    transactionString += this.debit !== null ? `${this.debit.toFixed(2)} || ` : `|| `;
    transactionString += `${this.balance.toFixed(2)}`;
    return transactionString;
  }
}

module.exports = Transaction;