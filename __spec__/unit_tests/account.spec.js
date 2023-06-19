const Account = require('../../src/account.js')

let account;

describe('Account', () => {
  beforeEach(() => {
    account = new Account();
  });

  describe('addDeposit', () => {
    test('it correctly updates the balance', () => {
      account.addDeposit(1000, new Date("2023-06-19"));
      expect(account.balance).toBe(1000);
      account.addDeposit((2000), new Date("2023-06-15"));
      expect(account.balance).toBe(3000);
    });
  });
});