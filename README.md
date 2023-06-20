# Bank Tech Test
- [Bank Tech Test](#bank-tech-test)
  - [Tech Test Description](#tech-test-description)
  - [Design Process](#design-process)
    - [Thought process](#thought-process)
    - [Edge cases](#edge-cases)
    - [Initial Class Design and Function Design](#initial-class-design-and-function-design)
  - [Testing and Examples:](#testing-and-examples)
    - [Input and Output examples](#input-and-output-examples)
  - [How to Install and Run code](#how-to-install-and-run-code)
    - [Environment setup](#environment-setup)
    - [Run Program](#run-program)
    - [Run Tests](#run-tests)

## Tech Test Description
Requirements:
```plain
* You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).
```
Accaptance criteria:
```plain
Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Design Process

### Thought process
* I have opted to go for a simple OO design pattern where an Account class will currently hold the relevant Transaction objects. 
  * I believe this approach would make the code base easy to expand on in the future, with the Account possibly storing an AccountHolder object that would contain the relevant user information.
* The date argument in addDeposit and addWithdrawals is currently locked to be a Date object, and is an optional argument defaulting to current date.
  * This choice was made to allow the codebase to enforce a consistent format to data stored, regardless of the frontend interface used.
  * It  also allows for Date injection not just for test purposes, but also in preparation for front-end features that might allow a user to add a custom date for their transactions.
* The Transaction class is currently used for both Deposits and Withdrawals, with just a single constructor that can take either a debit, credit or both values at the same time. 
  * This felt like a more appropriate solution in the current scope of the exercise, as well as an easier solution to expand on in the future, where Transaction could possibly be used as an interface with Deposit and Withdrawal being child classes with more unique implementations added to those individually if necessary.

### Edge cases
* Invalid inputs
  * addWithdrawal(amount, date) and addDeposit(amount, date)
    * amount can only be a number, with a typeof comparison used
    * date uses an instanceof check for the Date class
    * both of the above will currently only return a string with the error description but do not currently throw an error. Errors can be implemented instead, based on the choice of the interface
    * if these functions run into either of the validation errors, they will not update Account balance or create and new Transactions
* Transactions entered in non-chronological order
  * Intially would've caused issues to the order that the Statements are printed, with the printStatement function only looking at the array order.
  * Would also make balance on the statement incorrect if a new transaction was entered before any existing ones, as the Transaction can only see the Account.balance at the time of object creation
  * This has been resolved by creating a recalculateBalances function that will sort the array in chronological order and parse through array, updating balances that may now be out of date
  * recalculateBalances runs after every transaction added to the account

### Initial Class Design and Function Design
![Class Design](docs/bank_tech_test_class_design.png)

```javascript
Account.addDeposit(amount, date)
  // Takes a float for amount, and a Date object
  // Adds amount to balance
  // Creates a Transaction object with debit == amount
  // Adds Transaction object to transactions list
  // Returns nothing

Account.addWithdrawal(amount, date)
  // Takes a float for amount, and a Date object
  // Subtracts amount from balance
  // Creates a Transaction object with credit == amount
  // Adds Transaction object to transactions list
  // Returns nothing

Account.printStatement()
  // Takes no arguments
  // Returns a string representing a list of transactions in reverse order
  // Formatted as:
  // date || credit || debit || balance


Transaction.toString()
  // Overloads javascripts Object.prototype.toString to return
  // 'date || credit || debit || balance' string
```

## Testing and Examples:

### Input and Output examples
```javascript
const account = new Account();

account.addDeposit(1000, new Date());
account.printStatement(): 
// returns: 
// date || credit || debit || balance
// 19/06/2023 || 1000.00 || || 1000.00

account.addWithdrawal(400, new Date());
account.printStatement();
// returns: 
// date || credit || debit || balance
// 19/06/2023 || || 400.00 || 600.00
// 19/06/2023 || 1000.00 || || 1000.00
```

## How to Install and Run code

### Environment setup
If you do not currently have nvm (Node Version Manager) installed, install it using:
```zsh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.zshrc
```
Otherwise, run node and install relevant packages using:
```zsh
nvm use node
npm install
```

### Run Program
There is currently no command line interface, therefore the app has to be interacted with through Node.
To run node:
```zsh
node
```
And once in node:
```javascript
const Account = require('./src/account.js')
```
This will import the main Account class to test available methods and their functionality. The data is currently not persisting between individual instances of node.

### Run Tests
To test coverage:
```zsh
npm run test
```
To list all created tests:
```zsh
jest --verbose
```
To run an output for the example given in the tech test requirements:
```zsh
npm run tech_test
```