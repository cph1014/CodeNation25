class car {
    constructor(reg, timeArrival) {
    this._reg = reg;
    this._timeArrival = timeArrival;
    }

    get charge(){
    return this._totalCharge;
    }

    calcCharge(timeLeaving){
    let totalTime = (timeLeaving - this._timeArrival) * 1.50;
    this._totalCharge = totalTime;
    }
    }
    
    const qwerty = new car("qwerty", 1300);
    qwerty.calcCharge(1600);
    console.log(qwerty.charge);