class playClass {
    constructor (type){
        this.hp;
        this.stamina;
        this.mana;
        this.intel;
    }
    example(){

    }
}

class playMage extends playerClass {
    constructor(){
        super(hp);
        this.mana;
        this.bluePointyHat = true;
    }
}