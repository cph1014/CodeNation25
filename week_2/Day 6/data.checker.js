let string ="codenation";
let rank= 1;

function dataChecker(string, rank) {
if (string=="codenation" && rank==1){
    console.log(`${string} and ${rank} are both correct.`);
}
else if (string=="codenation" && rank!==1){
    console.log(`The string ${string} is correct but the rank isn't 1.`);
}
else {
    console.log(`The string ${string} is wrong.`)
}
}
dataChecker("codenation",1)
dataChecker("happy",3)
dataChecker("codenation",3)
