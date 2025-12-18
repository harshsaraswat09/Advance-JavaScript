1️⃣ What is Asynchronous JavaScript?

JavaScript by default synchronous hota hai
➡️ ek kaam khatam → phir next kaam

But kuch kaam time lete hain:

API call (fetch)
Timer (setTimeout)
File / DB / network work

Agar JS wait karta rahe, app freeze ho jaayega
➡️ Isliye async JS use hota hai


2️⃣ setTimeout & setInterval
⏳ setTimeout – ek baar delay ke baad chale

setTimeout(() => {
    console.log("Hello after 3 sec");
}, 3000);

 3 sec baad sirf ek baar chalega

🔁 setInterval – baar baar chale
setInterval(() => {
    console.log("Hello every 2 sec");
}, 2000);


3️⃣ Callback Hell 😵
Problem

setTimeout(() => {
    console.log("Task 1");

    setTimeout(() => {
        console.log("Task 2");

        setTimeout(() => {
            console.log("Task 3");
        }, 1000);

    }, 1000);

}, 1000);


😵 Ye callback hell hai

Code unreadable
Debug mushkil
Maintenance worst



4️⃣ Promises – Solution 
🔹 Promise kya hota hai?

Promise bolta hai:
“Main kaam kar raha hoon… baad me result dunga”


Pending	    Kaam chal raha
Resolved	Kaam ho gaya
Rejected	Kaam fail


const prm = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Kaam ho gaya");
        // reject("Kaam fail");
    }, 3000);
});

prm.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
});

.then() → success
.catch() → failure

5️⃣ fetch() + Promise Chain
❓ fetch kya karta hai?

URL par request bhejta hai
Promise return karta hai
Data readable nahi hota

1. Raw fetch data unreadable
fetch("https://randomuser.me/api/")

2. Convert to JSON
fetch("https://randomuser.me/api/")
    .then((raw) => raw.json()) // readable
    .then((data) => {
        console.log(data.results[0].name);
    });



7️⃣ async & await – BEST Solution 🏆
🔹 Simple Rule

async → function promise return karega

await → promise ke complete hone ka wait

async function abcd() {
    let raw = await fetch("https://randomuser.me/api/");
    let data = await raw.json();

    console.log(data.results[0].name);
}

abcd();


Same kaam
No .then()
No callback hell
Clean & readable