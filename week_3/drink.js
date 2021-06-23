let availBal = 0;
let reqBal = 0;
let drinks = [
    ["Coke", 1, 10],
    ["Fanta", 2, 6],
    ["Sprite", 3, 20],
    ["Tizer", 10, 0]
];

const cashInput = (cash) => {
    availBal = cash;
    console.log(availBal);
}

const checkStock = (drinkChoice) => {
    //1- Coke, 2 - Fanta, 3 - Sprite, 4 - Tizer
    //Test drinkChoice option and stock level from array
    if (drinkChoice == 1 && drinks[0][2] > 0){
        //Output stock value
        console.log(drinks[0][2]);
        console.log("Coke is in stock.");
        //Set balance requirement from array (cost per item)
        reqBal = drinks[0][1];
        //Call vendDrink and set bool flag to True (i.e vend the drink)
        vendDrink(true);
    } else if (drinkChoice == 2 && drinks[1][2] > 0){
        console.log(drinks[1][2]);
        console.log("Fanta is in stock.");
        reqBal = drinks[1][1];
        vendDrink(true);
    } else if (drinkChoice == 3 && drinks[2][2] > 0){
        console.log(drinks[2][2]);
        console.log("Sprite is in stock.");
        reqBal = drinks[2][1];
        vendDrink(true);
    } else if (drinkChoice == 4 && drinks[3][2] > 0){
        console.log(drinks[3][2]);
        console.log("Tizer is in stock.")
        reqBal = drinks[3][1];
        vendDrink(true);
    } else {
        //This else is the default
        console.log("Your drink is not in stock.");
        vendDrink(false);
    }
} 

const vendDrink = (bool) => {
    //Test if true && enough money per item
    if (bool && availBal >= reqBal){
        //This is the 'true' condition of 'bool'
        console.log("Enjoy your drink!");
    } else {
        //This is the 'false' condition of 'bool'
        console.log("Enjoy being thirsty!")
    }
}

cashInput(7);
checkStock(1);