//alert("hello")

/*----- app's state (variables) -----*/
let translation = ""

/*----- cached element references -----*/
let input1 = document.getElementById("input1")
let span1 = document.getElementById("span1") //output tag
let btn1 = document.getElementById("btn1")

/*----- event listeners -----*/
btn1.addEventListener("click", function(event) {
    translation = morse(input1.value)
    span1.innerHTML = translation
})

/*----- functions -----*/
function morse(str) { 
    let translatedstring = ""
    for (let character of str) { //ask this for condition and what is str here
        if (character === "a") {
            translatedstring += "._"
              } 
         else if (character === "b"){
       translatedstring += "_. . ."
         }
         else if (character === "c"){
           translatedstring += "_ . _ ."
              }
            }
            return translatedstring
     }