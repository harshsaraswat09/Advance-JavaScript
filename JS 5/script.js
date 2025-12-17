// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)
// **Task (Hindi):** Teen functions banao:
// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole
// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho
// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai



function loginUser(username, cb){   
    console.log("logging in user")
    setTimeout(() => {
        cb({id:1, username:"harsh"})
    }, 1000);
}
function fetchPermissions(id, cb){
    console.log("fetching permission")

    setTimeout(() => {
        cb(['read', 'write'])
    }, 2000);
}
function loadDashboard(permissions , cb){
    console.log("dashboard loaded")

    setTimeout(() => {
        cb()
    }, 3000);
}


loginUser("harsh", function(userData){
    fetchPermissions(userData.id ,function(permissions){
        loadDashboard(permissions ,function(){
            console.log("loaded")
        })
    })
})