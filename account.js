
// BANK ACCOUNT


const atm=  parseFloat(prompt("Please select one of the following choices 1.See balance  2.Make a deposit  3.Make a withdrawal  4.Get account name  5.Exit"));

const account = {
  accountName: "John Doe",
  balance: 100,
  getBalance: function()
  {
  return this.balance;
  },
  deposit: function()
  {
    newDeposit = prompt("Type in the amount you would like to deposit");
    if(newDeposit<0){
      account.accountError();
    }
    else{
      alert(`You have deposited ${this.newDeposit}`)
    }
    
  },
  withdrawal: function()
  {
    newWithdrawal = prompt("Type in the amount you would like to withdraw");
    if(newDeposit<0){
      account.accountError();
    }
    else{
      alert(`You have deposited ${this.newDeposit}`)
    }
  },
  getAccountName: function(){
    alert(`The accounts name is ${this.accountName}`);
  },
  accountError: function(){
    alert ("You cannot use negative numbers")
    
  },
  exitAccount: function(){
    alert(`Shutting down`);
  }
}


/* switch(atm > 0) 
{ case 1:
    alert(`Your current balance is ${account.getBalance()}`);
  break;
  
  case 2:
    alert(`You have deposited ${account.deposit()}`);
    break;
  
    case 3:
    alert(`You have withdrawn ${account.withdrawal()}`);
    break;
    
    case 4:
    alert(`${account.getAccountName()}`);
    break;
    
    case 5:
    exitAccount();
    break;
  
    default:
      alert(`Please enter a valid option`); */

     if(atm ===1){
      alert(`Your current balance is ${account.getBalance()}`);
     }
     else if(atm === 2){
      alert(`You have deposited ${account.deposit()}`); 
     }
     else if(atm === 3){
      alert(`You have withdrawn ${account.withdrawal()}`);
     }
     else if(atm === 4){
      alert(`${account.getAccountName()}`); 
     }
     else if(atm===5){
        alert(`${account.exitAccount()}`);
     }
     else if(atm<0){
       account.accountError();
     }


