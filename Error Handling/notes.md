// Introduction to Error Handling
// common types of errors in JavaScript - ['Syntax errors' , 'Runtime errors' , 'Logical errors']
// Understanding the error objects - ['message' , 'name' , 'stack']
// Handling exceptions using 'try-catch' , 'try-catch-finally'
// How to to throw errors in JavaScript
// Error Handling in Asynchronous Code

--------------------------------
Introduction to Error Handling

Error Handling ka matlab hota hai:

Jab code me koi problem aaye, to program crash na ho, balki hum usko handle kar saken.

Agar error handle nahi karte:

1.App crash ho jaata hai 
2. User ko blank screen dikhti hai 
3. Debug karna mushkil 

1️⃣ Common Types of Errors in JavaScript

JavaScript me mainly 3 types ke errors hote hain 

1️⃣ Syntax Errors 

Code likhne ka galat tareeka
if (true {
    console.log("Hello");
}


Missing )
Code run hi nahi hoga

Ye error compile time pe pakda jaata hai

2️⃣ Runtime Errors 

Code sahi likha hai, par run karte waqt problem

let a = 10;
console.log(b);

b defined nahi hai
ReferenceError

Program start hota hai, par crash ho jaata hai

3️⃣ Logical Errors 

Code chalega, par output galat aayega

function add(a, b) {
    return a - b; // logic mistake
}

console.log(add(5, 3)); // 2

Error Object Properties
message	Error ka message
name	Error ka type
stack	Error ka full trace

try {
    console.log(y);
} catch (error) {
    console.log(error.name);    // ReferenceError
    console.log(error.message); // y is not defined
    console.log(error.stack);   // line number + file
}


3️⃣ try-catch – Handling Exceptions
Exception kya hota hai?

Unexpected error jo runtime pe aata hai


try {
    let a = 10;
    console.log(b);
} catch (err) {
    console.log("Error aaya hai!");
}

Program crash nahi hota
Control catch me aa jaata hai

4️⃣ try-catch-finally

finally hamesha chalega
Chahe error aaye ya na aaye

try {
    console.log("Try block");
    let x = 10 / 0;
} catch (err) {
    console.log("Catch block");
} finally {
    console.log("Finally block");
}


Cleanup work ke liye useful
(loading stop, DB close, etc.)


5️⃣ How to Throw Errors in JavaScript

Kabhi-kabhi khud error banana padta hai

function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }
    return "Access granted";
}
