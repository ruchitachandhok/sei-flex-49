let btnEl = document.getElementById("btn1")
console.log(btnEl)

btnEl.addEventListener("click", playSound)


function playSound() {
    console.log("playSound is starting...")
    const player = new Audio('http://www.freesound.org/data/previews/42/42106_70164-lq.mp3');
    player.play();
}