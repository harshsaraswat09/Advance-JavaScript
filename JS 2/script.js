// call` , 'apply` , `bind`
// ek fnc mein this ki value window hoti hai, agar aap chahte ho ki vo value window na ho par koi aur object ho tab aap use kar sakte ho call apply bind
let obj = {
    name:"harsh"
}
function abcd(){
    console.log(this)
}
abcd.call(obj)