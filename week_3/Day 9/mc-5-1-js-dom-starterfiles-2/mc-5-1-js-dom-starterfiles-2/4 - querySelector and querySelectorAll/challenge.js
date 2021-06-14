//Use a for loop to display all even items to have text colour “lightgreen”.
//cycle over the list items and apply colors from the array called colours

const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];

const list = document.querySelectorAll("li");

let x=0; // Global var
for (let i = 0; i < list.length; i++){
     list[i].style.color = colours[x];
     x++;
     if (x== colours.length){
         x=0;
     }
}


//document.querySelectorAll("li");  
//document.querySelector("li");

//document.querySelector("#heading");  

//document.querySelector(".list-parent");   
//document.querySelectorAll(".green");

//const listItems = 
//console.log(listItems);
//console.log(listItems.length);