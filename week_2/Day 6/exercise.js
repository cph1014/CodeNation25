//[0][1][2][3]...

//create a veg array, array can be a string or a numbber or bool;
//let bool = true;
//let num = 1234;
//let string = ["hello","how","are","you"]; 

let shoppingList = [
                   ["Carrot","Beetroot","Onion"],
                   ["Apple","Pear","Banana"],
                   ["Tea","Coffee","Milk"]
                   ];
                   
for (let i=0; i<shoppingList.length; i++) {
console.log(shoppingList[i]);
}

console.log(shoppingList[1][2]);