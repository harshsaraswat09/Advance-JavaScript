Introduction to Asynchrony in Javascript

Introduction to `callbacks` and problems in callbacks

Understanding `Promises` - `Pending` , `Resolved` , `Rejection`

how to prevent callback hell using `async` & `await`

`setInterval` & `setTimeout` in JS

--------------------------------

// js -> single threaded
ek kaam ek baar mein kar payegi 
is process ko kehte hai synchronous approach
// asynchronous approach


function abcd(fn){
    fn(function(fn3){
        fn3(function(fn5){
            fn5()
        })
    })
}

abcd(function(fn2){
    fn2(function(fn4){
        fn4(function(){
            console.log("harsh")
        })
    })
})



// amitseDetailsLao(address, cb)
// dukaanKoDhundho(details, cb)
// Samaanlelo(samaanList, cb)
// gharAajao(address, cb)



function amitseDetailsLao(address, cb){
    setTimeout(() => {
        cb({lat : 23.36 , lng:45.65})
    }, 3000);
}

amitseDetailsLao("indrapuri", function(details){
    console.log(details)
})