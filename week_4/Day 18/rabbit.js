let rosie = {
    _name:"Rosie",
    _hops:0,
    _sum:10,

    get sum() {
        let sum = 10;
        sum = sum * 10;
        return sum;
    },

    get name() {
        this._name="Jim";
        return this._name;
    },

    get hops() {
        return this._hops;
    },

    increaseHops() {
        this._hops++;
    }
}

console.log(rosie.name);
console.log(rosie.hops);
rosie.increaseHops();
rosie.increaseHops();
rosie.increaseHops();
console.log(rosie.hops);
