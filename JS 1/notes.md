### 18. Object Oriented Concepts in JS

- Introduction to OOPS in JS
- Understanding `classes` and `objects` in JS
- Understanding `Constructor` and `Prototypes` - [`this keyword` , `call` , 'apply` , `bind`]
- More topics in OOPS - [`class expression` , `hoisting` , `inheritance` , `getter & setter`]




// jab code chota hota hai aap kuch bhi kar sakte ho bina koi guidelines follow kiye
aur jab code bada hojata hai tab aajata hai guidelines in role

// ek kamra ek banda sakta haii
naksha nahi 
architect nahi 

par jab banana ho BURJ KHALIFA 
acche architect chaiye
aur bhot kuch accha accha chaiye

// jab bhi bade s/w banta hai waise code nahi likhte  jaise poore DOM mein dekha hai

// OOP
// code -> objects classes and functions

# modular
# scalable
# manageable
# easy to fix
# re use

let obj = {
    name: "Harsh",
    age: 27
}

ek bande ki details ek saath rakhne ke liye aapke paas hai objects


// classes

// blue print hota hai 

// class -> SAANCHA
// constructor -> automatic chalne wala function hota hai

class remote{
    constructor(product, price, color){
        this.product = product;
        this.price = price;
        this.color = color;
    }
    powerON(){
        console.log("power on")
    }
    powerOFF(){
        console.log("power Off")
    }
}

let remote1 = new remote('lenvo', 1000, 'black');

## new word ka matlab EK BLANK OBJECT

classes banate hai taaki hame har bar ek naya object mil jaye

classes object ki factory hai

har baar NEW word k saath class run karoge to ek naya object milega

class biscuitmaker{
    constructor(){
        this.name = 'parle-g'
        this.price = 10
    }
}

let biscut = new biscuitmaker()


### example 2
class kitaab{
    constructor(name, price, author, color){
        this.name = name;
        this.price = price;
        this.author = author;
        this.color = color;
    }
    pannapalto(){}
    bookmark(){}
    padhlo(){}
}
let book1 = new kitaab("Rich Dad Poor Dad", 500, "Robert Kiyosaki", "Blue");

let book2 = new kitaab("Atomic Habits", 700, "James Clear", "White");


// this ki likhte waqt nahi chalte waqt decide hoti hai 


## Prototype 
class Human{
    constructor(){
        this.name = "Harsh";
        this.age = 21;
    }
}
Human.prototype.saanslo = function(){
        console.log("Saans le raha hu");
    }
Human.prototype.khanakhao = function(){
    console.log("Khana kha raha hu");
}



let harry = new Human();

let ron = new Human();