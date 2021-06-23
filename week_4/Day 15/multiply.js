let multiply = (num1) => {
    return (num2) => {
    return num1 * num2;
    };
    };
    
    let returnFunc = multiply(2);
    console.log(returnFunc(4));