const game = () => {
  let pScore = 0;
  let gCount = 0;

  //Make start button functional to fade into game screen
  const startGame = () => {
    const startBtn = document.querySelector("#start-button");
    const optionBtns = document.querySelector(".buttons-main-div");

    startBtn.addEventListener("click", function () {
      startBtn.classList.add("fadeOut");
      optionBtns.classList.remove("fadeOut");
      optionBtns.classList.add("fadeIn");
    });
  };
  //add computer options and player options
  const playGame = () => {
    const options = document.querySelectorAll(".choices");
    const computerOption = ["1", "2", "3", "4", "5"];
    let playerChoice = " ";

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 5);
        const computerChoice = computerOption[computerNumber];
        let playerChoice = option.id;
        compareChoice(playerChoice, computerChoice);
      });
    });
  };
  const updateScore = () => {
    const playerScore = document.querySelector("#score");
    const guessCount = document.querySelector("#guesses");
    playerScore.innerText = pScore;
    guessCount.innerText = gCount;
  };
  //use a function to compare player and computer choice

  const compareChoice = (playerChoice, computerChoice) => {
    const result = document.querySelector("#result");
    const hint = document.querySelector("#hint");
    //and determine the winner and push to score board

    if (playerChoice === computerChoice) {
      hint.innerText = `It was the same! Well Done!`;
      result.innerText = `You win!`;
      pScore++;
      gCount++;
      updateScore();
      return;
    } else if (playerChoice < computerChoice) {
      hint.innerText = `It was low. Your guess was ${playerChoice} and the Computer's guess was ${computerChoice}`;
      result.innerText = `You lose!`;
      gCount++;
      updateScore();
      return;
    } else if (playerChoice > computerChoice) {
      hint.innerText = `It was high. Your guess was ${playerChoice} and the Computer's guess was ${computerChoice}`;
      result.innerText = `You lose!`;
      gCount++;
      updateScore();
      return;
    }
  };
  const toggleHints = () => {
    const hints = document.querySelector("#hints-div #hint");
    const hintOn = document.querySelector("#hint-btnOff");
    const hintOff = document.querySelector("#hint-btnOn");

    hintOn.addEventListener("click", function () {
        hints.classList.add("fadeIn");
        hints.classList.remove("fadeOut");

    });
    hintsOff.addEventListener("click", function(){
        hints.classList.add("fadeOut");
        hints.classList.remove("fadeIn")
    })
  };
  toggleHints();
  playGame();

  //push hints to the DOM

  //toggle hints on and off
  startGame();
};

game();
