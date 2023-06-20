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

  describe('recalculateBalances()', () => {
    test('it correctly recalculates if 2 transactions are present', () => {
      account.transactions.push({credit: 200, debit: null, balance: 200});
      account.transactions.push({credit: null, debit: 30, balance: 0});
      account.recalculateBalances();
      expect(account.transactions[1].balance).toBe(170);
    });

    test('it recalculates if 3 transactions are present', () => {
      account.transactions.push({credit: 200, debit: null, balance: 200});
      account.transactions.push({credit: null, debit: 30, balance: 0});
      account.transactions.push({credit: 60, debit: null, balance: 222});
      account.recalculateBalances();
      expect(account.transactions[1].balance).toBe(170);
      expect(account.transactions[2].balance).toBe(230);
    });

    test('it recalculates if transactions are not in date order', () => {
      account.transactions.push({
        date: new Date('2023-01-02'),
        credit: null,
        debit: 50,
        balance: 200,
      });
      account.transactions.push({
        date: new Date('2023-01-01'),
        credit: 400,
        debit: null,
        balance: 99,
      });
      account.recalculateBalances();
      expect(account.transactions[0].balance).toBe(400);
      expect(account.transactions[1].balance).toBe(350);
    });
  });
});
