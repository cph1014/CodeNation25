//Fahrenheit is the temperature in Celsius times 9/5, plus 32.


const multiplyByNineFifths = (celsius) => { //4
    return celsius * (9/5);  //5, return 6
    };
    const getFahrenheit = (celsius) => {  //2
    return multiplyByNineFifths(celsius) + 32;  //3. return 7
    };
    console.log("The temperature is " + getFahrenheit(30) + "°F"); //1, console.log 8
    // Output: The temperature is 59°F

    function convertToF (celsius) {
        let fahrenheit;
        return fahrenheit=(celsius*9.0)/5 +32;
        }
        convertToF(15);