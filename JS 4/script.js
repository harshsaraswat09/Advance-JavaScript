// callback -> ek function jo turant nahi chalega ye chalega jab aapka koi kaam complete hoga

// cb -> function mein pass karte ho




// callbacks

// situation -> github se repository data lao

// getUserDetails(username, cb)
// getAllRepos(userid, cb)
// getRepoDetail(repos[0], cb)

// amitseDetailsLao(address, cb)
// dukaanKoDhundho(details, cb)
// Samaanlelo(samaanList, cb)
// gharAajao(address, cb)



// function amitseDetailsLao(address, cb){
//     setTimeout(() => {
//         cb({lat : 23.36 , lng:45.65})
//     }, 3000);
// }

// amitseDetailsLao("indrapuri", function(details){
//     console.log(details)
// })

function icecreamlao(address, fn){
    //logic 
    fn("ice cream")


}

icecreamlao("address", function(ice){
    
})