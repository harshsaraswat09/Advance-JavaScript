Understanding `Promises` - `Pending` , `Resolved` , `Rejection`

how to prevent callback hell using `async` & `await`

`setInterval` & `setTimeout` in JS

--------------------------------
// Promises
// -> ek kaam jaake karo
// -> pending state
// -> kaam ho jayega -> resolved
// -> kaam nahi hua toh -> rejected

const prm = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve()
    }, 3000);
})

prm.then(function(){
    console.log('hey')
})
prm.catch(function(){
    console.log('heyeyeye')
})


--------------------------------

// fetch se kisi bhi url par jaa sate hai
fetch(`https://randomuser.me/api/`)

    .then((raw) => raw.json())
    .then((data) => {
        console.log(data.results[0].name)
    })
// fetch ka data readable nahi hota

// usey json banake readable karte hai

// iske baad jo data milta hai vo readable hota hai

//------------------------------

// fetch(`https://randomuser.me/api/`).then(function(notReadableData){
//     return notReadableData.json()
// })
// .then(function(aslidata){
//     console.log(aslidata)
// })\




async function abcd() {
    let raw = await fetch(`https://randomuser.me/api/`)

    let data = await raw.json()

    console.log(data)
    
}

abcd()