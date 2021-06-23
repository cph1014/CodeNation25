const myFunc = () => {
    return () => {
    console.log("hello");
    };
    };
    
    let returnedFunc = myFunc();
    returnedFunc();