//alert("hello")
let btnEl = document.getElementById ("btn1")
console.log("btnEl")

btnEl.addEventListener("click", onclick);


function onclick() {
    let mainEl = document.getElementById("main1")
    mainEl.innerHTML = "<h1>You got this!!</h1>"
    }