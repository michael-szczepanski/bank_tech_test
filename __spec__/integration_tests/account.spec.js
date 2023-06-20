const Account = require('../../src/account.js');

let account;

describe('Account', () => {
  beforeEach(() => {
    account = new Account();
  });

  describe('addDeposit', () => {
    test('correctly adds a transaction to transactions array', () => {
      account.addDeposit(1234, new Date('2023-06-19'));
      expect(account.transactions.length).toBe(1);
      const storedTransaction = account.transactions[0];

      expect(storedTransaction.date).toEqual(new Date('2023-06-19'));
      expect(storedTransaction.credit).toBe(1234);
      expect(storedTransaction.debit).toBe(null);
      expect(storedTransaction.balance).toBe(1234);
    });

    test('correctly adds multiple transactions to the array', () => {
      account.addDeposit(1234);
      account.addDeposit(5678, new Date('2023-06-19'));
      expect(account.transactions.length).toBe(2);

      const storedTransaction = account.transactions[1];
      expect(storedTransaction.date).toEqual(new Date('2023-06-19'));
      expect(storedTransaction.credit).toBe(5678);
      expect(storedTransaction.debit).toBe(null);
      expect(storedTransaction.balance).toBe(6912);
    });
  });

  describe('addWithdrawal', () => {
    test('correctly adds a transaction to transactions array', () => {
      account.addDeposit(10000);
      account.addWithdrawal(1234, new Date('2023-06-19'));
      expect(account.transactions.length).toBe(2);

      const storedTransaction = account.transactions[1];
      expect(storedTransaction.date).toEqual(new Date('2023-06-19'));
      expect(storedTransaction.credit).toBe(null);
      expect(storedTransaction.debit).toBe(1234);
      expect(storedTransaction.balance).toBe(8766);
    });

    test('correctly adds multiple transactions to the array', () => {
      account.addDeposit(10000);
      account.addWithdrawal(1234, new Date('2023-06-19'));
      account.addWithdrawal(5678, new Date('2023-06-19'));
      expect(account.transactions.length).toBe(3);

      const storedTransaction = account.transactions[2];
      expect(storedTransaction.date).toEqual(new Date('2023-06-19'));
      expect(storedTransaction.credit).toBe(null);
      expect(storedTransaction.debit).toBe(5678);
      expect(storedTransaction.balance).toBe(3088);
    });
  });
});
