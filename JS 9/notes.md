Debouncing and throttling

CHATGPT ->
js code for applying debouncing to search bar with id of search

function debounce (fn , delay){
    let timer
    return function(){
        clearTimeout(timer)
        timer = setTimeout(fn , delay)
    }
}

document.querySelector("#search").addEventListener("input", 
    debounce(function(){
    console.log("chala")
    }, 4000)
)


--------------------------------

function throttle(fn, delay){
    let last = 0
    return function(){
        const now = Date.now()
        if (now - last >= delay){
            last = now
            fn()
        }
        
    }
}

window.addEventListener("mousemove", throttle(function(){
    console.log("kese ho")
}, 2000))

--------------------------------

// json parse -> json se obj banate ho 
// json stringify -> json banate ho 