class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName = () => (console.log(this.name));
    showStats = () => console.log("Name:", this.name, " Strength:", this.strength, " Speed:", this.speed, " Health:", this.health , "Believe It!!!");
    drinkSake = () => this.health += 10;
}
const newNinja = new Ninja("Naruto", 90);
newNinja.showStats();

class Sensei extends Ninja{
    constructor (name, health, speed, strength){
        super(name);
        this.wisdom = 10;
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
    }
    speakWisdom = () => newSensei.drinkSake() + console.log("In the ninja world, those who break the rules are scum, but those who abandon their friends are worse than scum.");
    senseiStats = () => newSensei.showStats();
}
const newSensei = new Sensei("Kakashi");
newSensei.speakWisdom();
newSensei.senseiStats();


