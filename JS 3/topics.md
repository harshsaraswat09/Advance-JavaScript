- More topics in OOPS - [`class expression` , `hoisting` , `inheritance` , `getter & setter`]


# 1. Class Expression

JavaScript allows classes to be created as **expressions**, just like function expressions.

let Animal = class{
    constructor() {
        this.name = 'dodo'
        this.breed = 'dog'
    }
}

let an1 = new Animal()

## 2. Hoisting in Classes

Classes are **not hoisted**. You cannot use a class before declaring it.


## 3. Inheritance (`extends`)
class Animal {
    constructor(){
        this.hands = 2
        this.legs = 2
    }
    eat(){}
    breathe(){}
}

class Kekda extends Animals{
    constructor(){
        super()
        this.legs = 8
        this.hands = 0
    }
    susu(){}
}

let k1 = new Kekda()

--------------------------------

class Animal{
    constructor(){
        this._age = 22
    }

    get age(){
        return this._age

    }

    set age(val){
        if(val < 0){
            console.error("not")
            return
        }
        this._age = val
        return this._age

    }
}

let a1 = new Animal()
a1.age = 37



// SECTION 1: Objects and OOPS Thinking

// Create a user object that stores name and emai and has a login method which prints "user logged in"

// imagine you now have 5 users
// First, think how you would manage them without using a class
// then convert the same logic using a class and observe how the code becomes cleaner 



class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }
    loggedIn(){
        console.log("log in")
    }
}

let user1 = new User("harsh", "h@h.h")

--------------------------------
// SECTION 2: Classes and Objects

// Create a Car class with following:
// brand
// speed
// a drive method that prints the car brand and speed

// Create 2 different car objects from the same class and verify that their data os different.

// Answer in your own words
// if classes did not exist, how would you write this logic and what problem might occur when the project becomes large

class Car{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;

    }

    drive() {
        return this.brand + " " + this.speed
    }
}

let c1 = new Car('hyundai', 180)
let c2 = new Car('mahindra', 200)

--------------------------------
// SECTION 3: Constructor and this keyword

// Create a student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values

// Inside the constructor, set values using this.

// then try removing this and notice what error occurs and why

// Create an object with 2 methods:
// one with normal fnc
// one with arrow fnc

//Inside both, print this and observe difference


class Student{
    constructor(name, rollno){
        this.name = name
        this.rollno = rollno
    }
    introduce(){
        return this.name + " " + this.rollno
    }
}


--------------------------------
// SECTION 4: Constructor Functions and Prototypes

//Create a user constructor function (do not use class syntax)

// Add a login method in 2 ways
// First, inside the constructor
// then, move the method to the prototype

// Create 2 user objects and compare their login methods using equality
// explain why the result is true or false 

function User(){
    this.name = "harsh"
}

User.prototype.login = function(){
    console.log('loggedin');
    
}

let an1 = new User()