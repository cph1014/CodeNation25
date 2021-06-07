let coffeeIsGrinding = true; //declare new variable with boolean value
const pressGrindBeans = () => {
if (coffeeIsGrinding) {       //they do this part if it is true, so it is if(coffeeIsGrinding == True);
console.log("Stopping the grind"); 
coffeeIsGrinding = false;  
} else { //false, do this
console.log("Grinding is about to begin");
coffeeIsGrinding = true;
}
}
pressGrindBeans(); //call the function, must have 