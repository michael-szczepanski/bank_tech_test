const Account = require('../src/account.js');

const account = new Account();
account.addDeposit(1000, new Date('2023-01-10'));
account.addDeposit(2000, new Date('2023-01-13'));
account.addWithdrawal(500, new Date('2023-01-14'));

console.log(account.printStatement());
