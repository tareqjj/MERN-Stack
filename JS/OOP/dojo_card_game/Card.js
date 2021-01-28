class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if ( target instanceof Unit )
            target.res -= this.power;
        else
            throw new Error( "Target must be a unit!" );
    }

    printStats() {
        console.log(this.name, this.cost, this.power, this.res)
    }

}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    effect(target) {
        if ( target instanceof Unit ) {
            if (this.stat == "resilience")
                target.res += this.magnitude;
            else
                target.power += this.magnitude;
        }
        else
            throw new Error( "Target must be a unit!" );
    }

    printStats() {
        console.log(this.name, this.cost, this.text, this.stat, this.magnitude)
    }

}


const firstUnit = new Unit("Red Belt Ninja", 3, 3, 4)
const secondUnit = new Unit("Black Belt Ninja", 4, 5, 4)

const firstEffect = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
const secondEffect = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
const thirdEffect = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

firstEffect.effect(firstUnit);
firstEffect.printStats();
firstUnit.printStats();
secondEffect.effect(firstUnit);
secondEffect.printStats();
firstUnit.printStats();
thirdEffect.effect(firstUnit);
thirdEffect.printStats();
firstUnit.printStats();
firstUnit.attack(secondUnit);
secondUnit.printStats();

