/*----- constants -----*/
const rockImgUrl = 'imgs/rock.png'
const paperImgUrl = 'imgs/paper.png'
const scissorsImgUrl = 'imgs/scissors.png'

const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const goAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');

/*----- app's state (variables) -----*/
let playerChoice = "rock"
let computerChoice = "rock";
let playerScore = 0;
let computerScore = 0;
let tiesScore = 0;
let winnerString = "";

/*----- cached DOM elements -----*/
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const tiesEl = document.getElementById('tie');

const playerChoiceEl = document.getElementById('player-img');
const computerChoiceEl = document.getElementById('computer-img');

let playBtnEl = document.getElementById('play-btn')

/*----- event listeners -----*/
playBtnEl.addEventListener('click', playRound);

/*----- functions -----*/
initialize();
render();

function initialize() {
  // reset our 6 states (variables) to defaults
  playerChoice = "rock"
  computerChoice = "rock";
  playerScore = 0;
  computerScore = 0;
  ties = 0;
  winnerString = "";
}

function playRound() {
  computerChoice = getRandomChoice();
  playerChoice = getRandomChoice();
  winnerString = getWinner();
  updateScores()
  render();
}

function getRandomChoice() {
  let randomNumber = getRandomNumberFrom0to2()
  if (randomNumber == 0 ) {
    return "rock"
  } else if (randomNumber == 1) {
    return "paper"
  } else {
    return "scissors"
  }
}

function getWinner() {
  if (playerChoice == "rock" && computerChoice == "scissors") {
    return "player";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    return "computer";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    return "computer";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    return "player";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    return "player";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    return "computer";
  } else {
    return "";
  }
}

function updateScores() {
  if (winnerString == "player") {
    playerScore++;
  } else if (winnerString == "computer") {
    computerScore++;
  } else {
    ties++;
  }
}

// render updates the DOM (visuals) from the game state variables
function render() {
  // render scores visually from states
  playerScoreEl.innerHTML = playerScore;
  computerScoreEl.innerHTML = computerScore;
  tiesEl.innerHTML = ties;

  // render images visually from player choice states
  if (playerChoice == "rock") {
    playerChoiceEl.style.backgroundImage = `url(${rockImgUrl})`;
  } else if (playerChoice == "paper") {
    playerChoiceEl.style.backgroundImage = `url(${paperImgUrl})`;
  } else {
    playerChoiceEl.style.backgroundImage = `url(${scissorsImgUrl})`;
  }

  if (computerChoice == "rock") {
    computerChoiceEl.style.backgroundImage = `url(${rockImgUrl})`;
  } else if (computerChoice == "paper") {
    computerChoiceEl.style.backgroundImage = `url(${paperImgUrl})`;
  } else {
    computerChoiceEl.style.backgroundImage = `url(${scissorsImgUrl})`;
  }

  // color border if winner, otherwise "hide" the border
  if (winnerString == "player") {
    playerChoiceEl.parentElement.style.border = '10px solid darkgrey';
  } else {
    playerChoiceEl.parentElement.style.border = 'none';
  }

  if (winnerString == "computer") {
    computerChoiceEl.parentElement.style.border = '10px solid darkgrey';
  } else {
    computerChoiceEl.parentElement.style.border = 'none';
  }

}

function getRandomNumberFrom0to2() {
  return Math.floor(Math.random() * 3);
}

