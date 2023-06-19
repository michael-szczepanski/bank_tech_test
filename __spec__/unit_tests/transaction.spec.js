const Transaction = require('../../src/transaction.js');

describe('Transaction', () => {
  test('it creates correct object', () => {
    const transaction = new Transaction(new Date("2023-06-19"), 123, 456, 789);
    expect(transaction.date).toEqual(new Date("2023-06-19"));
    expect(transaction.credit).toBe(123);
    expect(transaction.debit).toBe(456);
    expect(transaction.balance).toBe(789);
  })
})