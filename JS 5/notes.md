
## Exercise 1 — Very Easy (Warming up)

**Task (Hindi):** Ek function banao `afterDelay`

**Requirements:**
- Ye function do cheezein lega:
  1. `time` (milliseconds)
  2. `callback` function
- Given `time` ke baad `callback` call kare
- Callback ke andar `"Callback executed"` print hona chahiye

**Use case:**
> “2 second baad ek kaam karna hai”

**Goal:**
- Samajhna ki callback delay ke baad kaise execute hota hai
- Ye `setTimeout` + callback connection hai


function afterDelay(time, cb){
    setTimeout(() => {
        cb()
    }, time);
}

afterDelay(3000, function(){
    console.log("done")
})


--------------------------------

## Exercise 2 — Intermediate (Data flow)
// **Task (Hindi):** Ek function banao `getUser`

function getUser(username, cb){
    setTimeout(() => {
        cb({id:1, username:"harsh"})
    }, 1000);
}

function getUserPosts(id, cb){
    setTimeout(() => {
        cb(['hello', 'wassup'])
    }, 2000);
}

getUser("harsh", function(data){
    getUserPosts(data.id, function(allPosts){
        console.log(data.username, allPosts)
    })
})


--------------------------------

## Exercise 3 — Intermediate (Callback dependency — thoda painful)

**Task (Hindi):** Teen functions banao:

1. `loginUser`
   - 1 second baad callback ko `user` object de
2. `fetchPermissions`
   - `userId` lega
   - 1 second baad callback ko `permissions` array de
3. `loadDashboard`
   - `permissions` lega
   - 1 second baad callback ko `"Dashboard loaded"` bole

**Flow:**
- Pehle `loginUser`
- Uske andar `fetchPermissions`
- Uske andar `loadDashboard`
- Final output console mein print ho

**Goal:**
- Callback nesting ko feel karna
- Yehi structure baad mein callback hell banta hai