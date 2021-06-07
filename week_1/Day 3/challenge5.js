let time = 8;
let placeOfWork = "I'm at work!";
let townOfHome = "I'm at home!";
switch(true){
    case time >= 9:
        console.log(`${placeOfWork}`);
        break;
    case time <= 7:
         console.log(`${townOfHome}`);
         break;
    default:
        console.log("I'm commuting");
}