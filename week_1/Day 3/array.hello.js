array1 = ["h","o", "l", "l", "o", "h","e", "l", "l", "o", "o","e", "l", "l", "o"];
array2 = ["h","e", "l", "l", "o", "e","e", "l", "l", "o", "h","e", "l", "l", "o"];
let loopNum = array1.length;
for (let i = 0; i < loopNum; i++){
    if (array1[i] == array2[i]){
        console.log("It's a match!");
    } else {
        console.log("It's not a match!");
    }
}