// 2. Objects in JavaScript
// Objects = Data ko ek saath rakhne ka box

let obj = {
  name: "Harsh",
  age: 27
}

// Ek banda ki saari info ek jagah = object.

//-----------------------------
// 2. classes in JavaScript

class Remote {
    constructor(product, price, color){
        this.product = product;
        this.price = price;
        this.color = color;
    }

    powerON(){
        console.log("power on");
    }

    powerOFF(){
        console.log("power off");
    }
}

let remote1 = new Remote("Lenovo", 1000, "black");


//-----------------------------

// 4. Constructor

class BiscuitMaker {
  constructor(){
    this.name = "Parle-G";
    this.price = 10;
  }
}


// 6. Prototype
class Human {
   constructor() {
      this.name = "Harsh";
      this.age = 21;
   }
}

Human.prototype.saanslo = function(){
   console.log("saans le raha hu");
}

Human.prototype.khanakhao = function(){
   console.log("khana kha raha hu");
}

let harry = new Human();
let ron = new Human();

