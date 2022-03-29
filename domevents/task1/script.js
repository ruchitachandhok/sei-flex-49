// alert("test!")

/*----- app's state (variables) -----*/
let counter = 0
console.log("counter", counter)

/*----- cached element references -----*/
let span1 = document.getElementById("span1")
console.log("span1", span1)
let btn1 = document.getElementById("btn1")
console.log("btn1", btn1)

/*----- event listeners -----*/
// attach event listener to the button

btn1.addEventListener("click", whathappens)

function whathappens(){
    counter = counter + 1
    console.log("counter", counter)
span1.innerHTML = counter
}
