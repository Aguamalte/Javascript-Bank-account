
// BANK ACCOUNT
const atm=  parseFloat(prompt("Please select one of the following choices 1.See balance  2.Make a deposit  3.Make a withdrawal  4.Get account name  5.Exit"));

const account = {
  accountName: "John Doe",
  balance: 100,
  getBalance: function()
  {
    alert (`Your current balance is ${this.balance}`);
  },
  deposit: function()
  {
    newDeposit = prompt("Type in the amount you would like to deposit");
    if(newDeposit<0){
      account.accountError();
    }
    else{
      alert(`You have deposited ${newDeposit}`);
    }
  },
  withdrawal: function()
  {
    newWithdrawal = prompt("Type in the amount you would like to withdraw");
    if(newWithdrawal<0){
      account.accountError();
    }
    else{
      alert(`You have withdrawn ${newWithdrawal}`)
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

     if(atm ===1){
      alert(`${account.getBalance()}`);
     }
     else if(atm === 2){
      alert(`${account.deposit()}`); 
     }
     else if(atm === 3){
      alert(`${account.withdrawal()}`);
     }
     else if(atm === 4){
      alert(`${account.getAccountName()}`); 
     }
     else if(atm===5){
        alert(`${account.exitAccount()}`);
     }
     else if(atm>5){
      alert(`You need to enter a valid option`);
    }
     else if(atm<0){
       account.accountError();
     }


