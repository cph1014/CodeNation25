let accnumber = 50449921;  //global variable, makes it more dynamic, it can change freely;
let myCashAmt = 200;   //global variable, the debit card number is read 

const cashWithdrawal = (amount, accnum) => {  //Parameters

console.log(`Withdrawing ${amount} from account ${accnum}`);

}

cashWithdrawal(myCashAmt, accnumber);

