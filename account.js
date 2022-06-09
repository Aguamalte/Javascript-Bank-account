
// BANK ACCOUNT

const account = {
  accountName: "John Doe",
  balance: 100,
  getBalance: function()
  {
    alert (`Your current balance is ${this.balance}`);
    ATM();
  },
  deposit: function()
  {
    newDeposit = parseFloat(prompt("Type in the amount you would like to deposit"));
    if(newDeposit<=0,"",isNaN(newDeposit)){
      account.accountError();
      account.deposit();
    }
    else{
      this.balance+=newDeposit;
      alert(`You have deposited $${newDeposit}, you now have a balance of ${this.balance}`);
      ATM();
    }
  },
  withdrawal: function()
  {
    newWithdrawal = parseFloat(prompt("Type in the amount you would like to withdraw"));
    if(newWithdrawal<=0,"",isNaN(newWithdrawal)){
      account.accountError();
      account.withdrawal();
    }
    else if (newWithdrawal>this.balance) {
				alert(`You cannot withdraw a larger amount than your current balance`)
        account.withdrawal();
			}
      else{
        this.balance -= newWithdrawal;
				alert(`Your remaining balance is $${this.balance}`);
        ATM();
      }
    },
  
  getAccountName: function(){
    alert(`The accounts name is ${this.accountName}`);
    ATM();   
  },
  accountError: function(){
    alert ("You have to input a valid number")
  }
  
}

function exitAccount (){
  return (`Shutting down`);
}
   
     function ATM() {
      
      const opt =  parseFloat(prompt("Please select one of the following choices 1.See balance  2.Make a deposit  3.Make a withdrawal  4.Get account name  5.Exit"));
      // objekt atm med parseFloat och propmt här
      if(opt ===1){
        alert(`${account.getBalance()}`);
       }
       else if(opt === 2){
        alert(`${account.deposit()}`); 
       }
       else if(opt === 3){
        alert(`${account.withdrawal()}`);
       }
       else if(opt === 4){
        alert(`${account.getAccountName()}`); 
       }
       else if(opt===5){
          alert(`${exitAccount()}`);
       }
       /* else if(atm>5){
        alert(`You need to enter a valid option`);
        account.accountError(); */
      
       else if(opt<=0,"",isNaN,opt>5){
         account.accountError(); 
         ATM();
       }
      // här lägger du if satsen rad 45 - 59

      // glöm inte kalla på din funktion för att starta.
    }
ATM();

