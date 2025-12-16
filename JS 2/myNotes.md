1. Introduction to OOPS in JavaScript

OOPS (Object Oriented Programming System) ek programming approach hai jisme code ko objects aur classes ke form mein organize kiya jata hai.

JavaScript prototype-based language hai, lekin ES6 ke baad class syntax provide karta hai jo internally prototypes par hi kaam karta hai.

--------------------------------
2. Classes and Objects in JavaScript

Class → Blueprint hota hai

Object → Class se bana real instance

class Sketch {
    constructor() {
        this.character = "doraemon"
        this.color = "blue"
        this.someFnc = function () {}
    }
}
let s1 = new Sketch()

## constructor() automatically call hota hai jab object create hota hai

## this current object ko refer karta hai

--------------------------------
4. this Keyword 
-> this ek special keyword hai jo execution context ke according value decide karta hai.

1. Global scope -> window
2. Normal function -> window
3. ES5 function inside object -> Object itself
4. Arrow function inside object	-> window
5. ES5 function inside ES5 function (inside object) ->	window
6. Arrow function inside ES5 function (inside object)	-> Object

--------------------------------

## 5. call, apply, bind

Normally function ke andar this = window hota hai.
Agar aap chahte ho this kisi custom object ko point kare, tab call, apply, bind use karte hain.

🔹 call()

Function immediately execute hota hai

this manually set karte ho

🔹 apply()

Same as call

Difference: arguments array ke form mein

🔹 bind()

Function execute nahi hota

Ek naya function return karta hai

this permanently bind ho jata hai
