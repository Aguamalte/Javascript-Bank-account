
// BANK ACCOUNT

const account = {
  accountName: "John Doe",
  balance: 100,
  getBalance: function()
  {
    
    alert (`Your current balance is ${this.balance}`);
    prompt(ATM());
  },
  deposit: function()
  {
    newDeposit = prompt("Type in the amount you would like to deposit");
    if(newDeposit<=0,"",isNaN(newDeposit)){
      account.accountError();
      prompt(ATM());
    }
    else{
      alert(`You have deposited ${newDeposit}`);
      prompt(ATM());
    }
  },
  withdrawal: function()
  {
    newWithdrawal = prompt("Type in the amount you would like to withdraw");
    if(newWithdrawal<=0,"",isNaN(newWithdrawal)){
      account.accountError();
      prompt(ATM());
    }
    else{
      
      alert(`You have withdrawn ${newWithdrawal}`);
      prompt(ATM());
    }
  },
  getAccountName: function(){
    alert(`The accounts name is ${this.accountName}`);
    prompt(ATM());
  },
  accountError: function(){
    alert ("You have to input a valid number")
    prompt(ATM());
    
  },
  exitAccount: function(){
    alert(`Shutting down`);
  }
}    
     function ATM() {
      const atm=  parseFloat(prompt("Please select one of the following choices 1.See balance  2.Make a deposit  3.Make a withdrawal  4.Get account name  5.Exit"));
      // objekt atm med parseFloat och propmt här
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
       else if(atm<=0,"",isNaN){
         account.accountError(); 
       }
      // här lägger du if satsen rad 45 - 59

      // glöm inte kalla på din funktion för att starta.
    }
prompt(ATM());

