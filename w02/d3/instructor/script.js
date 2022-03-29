// 1. "cache" the trigger
let btnEl = document.getElementById("btn2")
console.dir(btnEl)

// 2. create an "event listener" function
function myFunction() {
    let mainEl = document.getElementById("main1")
    mainEl.innerHTML = "<h1>SEI ROCKS!</h1>"
    mainEl.style.backgroundColor = "cornflowerblue";
    mainEl.classList.add("vanish") // add the "vanish" class defined in css to make it vanish
}

// 3. attach the evtListener (ie., myFunction) to kick in when the trigger (ie., btnEl / "btn2") is clicked
btnEl.addEventListener("click", myFunction);
