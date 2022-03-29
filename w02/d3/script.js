// console.log("my script is kicking in")

//cache the trigger
let btnEl = document.getElementById("btn2")
console.log(btnEl)

//2. create an "event listener" function
function clicked() {
    alert("oh no you clicked me!")
    let mainEl = document.getElementById("main1")
    mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
    mainEl.style.backgroundColor = "cornflowerblue"
}

//3. attach the event listener to trigger. you can add the Event listener to any DOM object.
btnEl.addEventListener("click", clicked);