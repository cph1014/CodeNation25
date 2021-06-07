//Function linked to an identifier and call factorial to get it to do something
function factorial (n) {
    if ((n === 0) || (n === 1)) {
    return 1;
    } else {
    return (n * factorial(n-1));
    }
    }
    console.log(factorial(33)); // because its 33*32*...*2*1+ =8.6*10^26