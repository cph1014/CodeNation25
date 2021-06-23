let D = 14;
let M = 10;
let y = 1988;


if(M < 3){
//True
    M = M + 12;
    y = y - 1;
}

//False
let F = int.floor(y / 100);
let L = y - 100 * F;

let S = int.floor(2.6*M - 5.39) + int.floor(L+4) + int.floor(F+4) + D + L - 2*F
let X = S - (7* int.floor(S / 7));
console.log(X);