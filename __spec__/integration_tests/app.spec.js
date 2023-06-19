/* eslint-disable max-len */
const Account = require('../../src/account.js');

describe('App', () => {
  test('passes the example test', () => {
    const account = new Account();
    account.addDeposit(1000, new Date('2023-01-10'));
    account.addDeposit(2000, new Date('2023-01-13'));
    account.addWithdrawal(500, new Date('2023-01-14'));
    expect(account.printStatement()).toEqual(
        'date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00',
    );
  });

  test('correctly updates after first deposit', () => {
    const account = new Account();
    account.addDeposit(1000, new Date('2023-01-10'));
    expect(account.printStatement()).toEqual(
        'date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00',
    );
  });
});
