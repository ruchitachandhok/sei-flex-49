let parentEl = document.getElementById("parent")
console.log("parent", parentEl)

parentEl.addEventListener("click", playATurn)

// strange - only ever executed if evt happens
function playATurn(event) {
    console.log("the id of the div clicked was", 
            event.target)

    // event.target ===== <div>
    event.target.style.backgroundColor = "red";
}

