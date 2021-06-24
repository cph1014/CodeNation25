class Animal{
    constructor(name){
    this._name = name;
    this._hunger = 100;
    this._thirst = 100;
    }
    get name(){
    return this._name;
    }
    get hunger(){
    return this._hunger;
    }
    get thirst(){
    return this._thirst;
    }
    eat(){
    this._hunger--;
    }
    drink(){
    this._thirst--;
    }
    }
    
    class Bunny extends Animal {
    constructor(name, lovesCarrot, favFood){
    super(name);
    this._lovesCarrot = lovesCarrot;
    this._favFood = favFood;
    }
    get lovesCarrots(){
    return this._lovesCarrot;
    }
    }
    
    const rosie = new Bunny("Rosie", true, ["rocket", "carrot", "lettuce"]);
    console.log(rosie.name);
    console.log(rosie.thirst);
    console.log(rosie.hunger);
    rosie.eat();
    rosie.drink();
    console.log(rosie.thirst);
    console.log(rosie.hunger);
    console.log(rosie._favFood);
    console.log(rosie._favFood[0]);
    console.log(rosie._favFood[2]);