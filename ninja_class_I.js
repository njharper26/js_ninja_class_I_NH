function Ninja(name){
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
    this.sayName = function(){
        console.log("My name is " + this.name + "! I am a savage Ninja...");
    }
    this.showStats = function(){
        console.log("Ninja: " + this.name + ", Strength: " + strength + ", Speed: " + speed);
    }
    this.drinkSake = function(num){
        this.health += num;
        console.log("Drank sake!!! " + num + " pt. Health boost. Health: " + this.health);
    }
}

let ninja1 = new Ninja("Joe");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake(10);