//Create a variable called word that takes a string.Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false.

let word = "abbbbba";
let firstword = word.charAt(0); 
let lastword = word.slice(-1);

if (firstword === lastword){
   console.log ("ture");
} else {
    console.log("false");
}
