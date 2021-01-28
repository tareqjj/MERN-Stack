class Ninja {

    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log(this.name, this.strength, this.speed, this.health)
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}





const ninja1 =  new Ninja("tareq")

ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()

const sensei = new Sensei("fares")
sensei.speakWisdom();
sensei.showStats();