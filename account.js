
// BANK ACCOUNT
const info = prompt("Please select one of the following choices 1.See balance  2.Make a deposit  3.Make a withdrawal  4.Get account name  5.Exit");
function options(){
  var menu="Please select one of the following choices 1.See balance  2.Make a deposit  3.Make a withdrawal  4.Get account name  5.Exit";
  return menu;
}
const account = {
  accountName: "John Doe",
  balance: 100,
  newDeposit:0,
  newWithdrawal:0,
  getBalance: function()
  {
  return this.balance-this.newWithdrawal+this.newDeposit;
  },
  deposit: function()
  {
    this.newDeposit = prompt("Type in the amount you would like to deposit");
    return this.newDeposit;
  },
  withdrawal: function()
  {
    this.newWithdrawal = prompt("Type in the amount you would like to withdraw");
    return this.newWithdrawal;
  },
  getAccountName: function(){
this.accName= prompt(`The accounts name is ${this.accountName}`);
  },
  accountError: function(){

  },
  exitAccount: function(){

  }
}

switch(info) 
{case "1":
alert(`Your current balance is ${account.getBalance()}`);
parseFloat(prompt(options()))
    break;
  case "2":
    alert(`You have deposited ${account.deposit()}`);
    parseFloat(prompt(options()))
    break;
  case "3":
    alert(`You have withdrawn ${account.withdrawal()}`)
    parseFloat(prompt(options()))
    break;
    case "4":
    alert(`${account.getAccountName()}`);
    parseFloat(prompt(options()))
    break;
    case "5":
    alert(`Shutting down`);
    break;
  default:
    parseFloat(prompt(options()))
}

