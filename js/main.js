const choices = document.querySelectorAll(".choices");
const score = document.querySelector(".score-guess");
const result = document.querySelector("#result");
const start = document.querySelector("#start-button");
const guesses = document.querySelector("#guesses-left");
const scoreboard = {
  YourScore: 0,
  GuessesLeft: 10
};

//play Game function
function play(e) {
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  const showWinner = (winner);
  
}
// get computers choice
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  if (rand === 1) {
    return 1;
  } else if (rand === 2) {
    return 2;
  } else if (rand === 3) {
    return 3;
  } else if (rand === 4) {
    return 4;
  } else {
    return 5;
  }
}
//get game winner
function getWinner(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return "player";
  } else if (computerChoice < playerChoice) {
    return "computerHigher";
  } else if (computerChoice > playerChoice) {
    return "computerLower";
  }
}
function showWinner(winner, computerChoice) {
  if (winner === "player") {
    document.querySelector(
      "#result"
    ).innerHTML = `<h1>Well done, you guessed correctly!</h1>`;
    scoreboard.YourScore++;
    scoreboard.GuessesLeft--;
  } else if (winner === "computerHigher") {
    document.querySelector(
      "#result"
    ).innerText = `<h1>Computer Guessed Higher</h1>`;
    scoreboard.GuessesLeft--;
  } else {
    document.querySelector(
      "#result"
    ).innerText = `<h1>Computer Guessed Lower</h1>`;
    scoreboard.GuessesLeft--;
  }

//show score
score.innerHTML = `
<div class="score-guess">
          <h2>Guesses left: <span id="guesses-left">${scoreboard.GuessesLeft}</span></h2>
          <p class="h2">Your Score: <span id="score">${scoreboard.YourScore}</span></p>
        </div>
`
}
//event listeners
choices.forEach((choice) => choice.addEventListener("click", play));
