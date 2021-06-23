let availBal = 0;
let drinks = {
    Coke:{'price': 1,'stock': 10},
    Fanta:{'price': 2,'stock': 6},
    Sprite:{'price': 3,'stock': 20},
    Tizer:{'price': 10,'stock': 0}
};
const cashInput = (cash) => {
    availBal = cash;
    console.log("Your available balance is £" +availBal);
}
const checkStock = (drinkChoice) => {
    if (drinks[drinkChoice]['stock']>0) {
        console.log(drinkChoice+" is in stock");
     } else {
         console.log(drinkChoice+" is not available");
     }
    if (drinks[drinkChoice]['stock']>0 && availBal >= drinks[drinkChoice]['price']){
        console.log('Enjoy you drink'); 
        drinks[drinkChoice]['stock'] --;
        newBal = availBal-drinks[drinkChoice]['price'];
        console.log("Your available balance is £" +newBal);
    } 
    if (drinks[drinkChoice]['stock']>0 && availBal <= drinks[drinkChoice]['price']){
        console.log('Please add more money for selected drink');
    } 
}