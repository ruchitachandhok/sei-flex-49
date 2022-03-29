// console.log("test!")
// alert("test!")

/*----- cached element references -----*/
let span1 = document.getElementById("span1")
let btn1 = document.getElementById("btn1")

/*----- event listeners -----*/

function clicked() {
    let mainEl = document.getElementsById("main1")
    mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
}

btn1.addEventListener("click", clicked);