const Account = require('../../src/account.js')

let account;

describe('Account', () => {
  beforeEach(() => {
    account = new Account();
  });

  describe('addDeposit', () => {
    test('it correctly updates the balance', () => {
      account.addDeposit(1000, new Date());
      expect(account.balance).toBe(1000);
      account.addDeposit((2000), new Date());
      expect(account.balance).toBe(3000);
    });

    test('it rejects non-numerical values for deposit amount', () => {
      account.addDeposit("banana", new Date());
      expect(account.balance).toBe(0);
      expect(account.transactions.length).toBe(0);
    })
  });

  describe('addWithdrawal', () => {
    test('it correctly updates the balance', () => {
      account.addDeposit(4000, new Date());
      account.addWithdrawal(1000, new Date());
      expect(account.balance).toBe(3000);
      account.addWithdrawal((2000), new Date());
      expect(account.balance).toBe(1000);
    });
  });
});