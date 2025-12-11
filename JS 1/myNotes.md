## OOPS in JavaScript

1. Introduction to OOPS in JS

OOP (Object-Oriented Programming) ek programming style hai jisme code ko objects aur classes ke form mein likha jata hai.

why OOP?

1. Modular – Code chote-chote parts mein divided.

2. Scalable – Project bada ho jaye to bhi manageable.

3. Manageable – Changes karna easy.

4. Reusable – Ek baar code likho, baar-baar use karo.

5. Clean Structure – Burj Khalifa wala system, jisme architect (class) bina kuch possible nahi.


Example:
Small code = ek kamra = bina rules chalta hai
Big software = BURJ KHALIFA = architect + planning + blueprint = OOP

## 2. Objects in JavaScript

Objects = Data ko ek saath rakhne ka box

let obj = {
  name: "Harsh",
  age: 27
}

## 3. Classes in JS

Class = Blueprint / Saancha
Object = Us class se bana actual cheez.

Important

new keyword = ek blank fresh object banata hai.

Classes = objects ki factory

Constructor = automatic run hota hai jab new se class chalti hai.

## 4. Constructor

Constructor = special function

Object create hote hi call ho jata hai.

Properties assign karta hai.


## 5. The this Keyword

"this" likhte waqt nahi, chalne waqt decide hota hai
→ Meaning: jis object ne function call kiya, this ussi ko point karega.


## 6. Prototype

JavaScript prototype-based language hai.
sab objects ke peeche ek hidden prototype object hota hai jisme shared functions hote hain.
