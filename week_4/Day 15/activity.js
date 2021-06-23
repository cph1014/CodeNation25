let whichGreeting =(timeOfDay) => {
    console.log(`Good ${timeOfDay}`)
}

let great =(time, fn) => {
    if(time <12) {
        fn("Morning")
    } else if (time > 12 && time < 18){
        fn("Afternoon")
    } else {
        fn ("Evening")
    }
}

greet(14, whichGreeting)
