//Cash machine time. Let’s create one that :
//dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you’re trying to withdraw.
//Be creative!

//User requests to withdraw, check available balance, approve or deny request.

const moneyOnAccount = 4600;
const pin = 1234;

let amountToWithdraw = 4000; 
let userPin = 1234;

const withdrawCash = () => {
if (moneyOnAccount >= amountToWithdraw) {
if (userPin === pin) {
console.log("Wait a sec for your money!");
}
else {
console.log("The operation was unsuccessful");
}
}
};

withdrawCash();