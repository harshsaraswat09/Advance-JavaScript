### 18. Object Oriented Concepts in JS

- Introduction to OOPS in JS
- Understanding `classes` and `objects` in JS
- Understanding `Constructor` and `Prototypes` - [`this keyword` , `call` , 'apply` , `bind`]
- More topics in OOPS - [`class expression` , `hoisting` , `inheritance` , `getter & setter`]

prototypes -> shared memory
class Sketch{
    constructor(){
        this.character = "doraemon"
        this.color = "blue"
        this.someFnc = function(){}
    }
}

Sketch.prototype.speak = function(){}

Sketch.prototype.walk = function(){}


let s1 = new Sketch()


--------------------------------

## this ->
 ek special keyword hai matlab ki jab ye chalega us context mein iski value batayi jati hai

 -> object k andar funtion banjaye toh vo hota hai METHOD

 global -> window
 funtion -> window
 es5 function inside obj -> obj
 es6 function inside obj -> window


// //  global -> window
// console.log(this)

// //  funtion -> window
// function abcd(){
//     console.log(this)
// }
// abcd()
// //  es5 function inside obj -> object 
// let obj = {
//     name: "harsh",
//     func: function(){
//         console.log(this)
//     }
// }
// obj.func()

// //  es6 function inside obj -> window
// let obj1 = {
//     fnc: ()=> {
//         console.log(this)
//     }
// }
// obj1.fnc()

// // es5 fnc inside es5 fnc inside obj -> WINDOW

// let obj2 = {
//     fnc: function(){
//         function abcd (){
//             console.log(this)
//         }
//         abcd()
//     }
// }
// obj2.fnc()


// es6 fnc inside es5 fnc inside obj -> obj

--------------------------------
## `call` , 'apply` , `bind`
// call` , 'apply` , `bind`
// ek fnc mein this ki value window hoti hai, agar aap chahte ho ki vo value window na ho par koi aur object ho tab aap use kar sakte ho call apply bind
let obj = {
    name:"harsh"
}
function abcd(){
    console.log(this)
}
abcd.call(obj)

call -> fnc chalata hai and this ki value set karta hai

apply -> wahi karta hai jo call karta hai and arguments mein pehli value this ki and doosri value array ki hoti hai hai

bind -> same as call bas aapko naya fnc deta hai