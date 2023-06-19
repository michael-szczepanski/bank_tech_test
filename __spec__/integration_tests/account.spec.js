const Account = require('../../src/account.js')

let account;

describe('Account', () => {
  beforeEach(() => {
    account = new Account();
  });

  describe('addDeposit', () => {
    test('correctly adds a transaction to transactions array', () => {
      account.addDeposit(1234, new Date("2023-06-19"));
      expect(account.transactions.length).toBe(1);
      let storedTransaction = account.transactions[0];
      expect(storedTransaction.date).toEqual(new Date("2023-06-19"));
      expect(storedTransaction.credit).toBe(1234);
      expect(storedTransaction.debit).toBe(null);
      expect(storedTransaction.balance).toBe(1234);
    })
  })
})