const Account = require('../../src/account.js');

let account;

describe('Account', () => {
  beforeEach(() => {
    account = new Account();
  });

  describe('addDeposit', () => {
    test('it correctly updates the balance', () => {
      account.addDeposit(1000);
      expect(account.balance).toBe(1000);

      account.addDeposit((2000));
      expect(account.balance).toBe(3000);
    });

    test('it rejects non-numerical values for deposit amount', () => {
      account.addDeposit('banana');
      expect(account.balance).toBe(0);
      expect(account.transactions.length).toBe(0);
    });

    test('it rejects non-Date objects for date field', () => {
      expect(
          account.addDeposit(1000, 'banana'),
      ).toBe('date is not a Date object');
      expect(account.balance).toBe(0);
      expect(account.transactions.length).toBe(0);
    });
  });

  describe('addWithdrawal', () => {
    test('it correctly updates the balance', () => {
      account.addDeposit(4000);
      account.addWithdrawal(1000);
      expect(account.balance).toBe(3000);

      account.addWithdrawal((2000));
      expect(account.balance).toBe(1000);
    });

    test('it rejects non-numerical values for withdrawal amount', () => {
      expect(
          account.addWithdrawal('banana'),
      ).toBe('amount is not a number');
      expect(account.balance).toBe(0);
      expect(account.transactions.length).toBe(0);
    });

    test('it rejects non-Date objects for date field', () => {
      expect(
          account.addWithdrawal(1000, 'banana'),
      ).toBe('date is not a Date object');
      expect(account.balance).toBe(0);
      expect(account.transactions.length).toBe(0);
    });
  });
});
