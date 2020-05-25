const game = () => {
  let pScore = 0;
  let gCount = 0;

  const startGame = () => {
    const startBtn = document.querySelector("#start-button");
    const btnMain = document.querySelector(".buttons-main-div");

    startBtn.addEventListener("click", () => {
      startBtn.classList.add("fadeOut");
      btnMain.classList.remove("fadeout");
      btnMain.classList.add("fadeIn");
    });
  };

  const toggleHints = () => {
    const hintsOff = document.querySelector("#hint-btnOff");
    const hintsOn = document.querySelector("#hint-btnOn");
    const hintText = document.querySelector("p #hint");

    hintsOff.addEventListener("click", () => {
      hintText.classList.add("fadeOut");
      hintText.classList.remove("fadeIn");
    });
    hintsOn.addEventListener("click", () => {
      hintText.classList.add("fadeIn");
      hintText.classList.remove("fadeOut");
    });
  };

  //play the game
  const playGame = function () {
    const options = document.querySelectorAll(".choices");
    const computerOptions = ["1", "2", "3", "4", "5"];
    const playerChoice = " ";

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 5);
        const computerChoice = computerOptions[computerNumber];
        const playerChoice = option.id;

        compareChoice(playerChoice, compareChoice);
      });
    });
  };

  const compareChoice = (playerChoice, computerChoice) => {
    const winner = document.getElementById("results-div");
    const hint = document.querySelector("p #hint");

    if (playerChoice === computerChoice) {
      winner.innerHTML = `<div id="results-div">
            <h3>
              Result: <span id="result">You Guessed Correctly!</span>
            </h3>
            <p class="text-muted hint-on-off">
              <span id="hint"No Hint needed..You're a pro!</span>
            </p>
            <button id="hint-btnOff" class="btn btn-dark">OFF</button>
            <button id="hint-btnOn" class="btn btn-dark">ON</button>
          </div>`;
      console.log("thesame");
      return;
    } else if (playerChoice > computerChoice) {
      winner.innerHTML = `<div id="results-div">
            <h3>
              Result: <span id="result"></span>
            </h3>
            <p class="text-muted hint-on-off">
              <span id="hint"Computers last guess was more than yours, try guessing lower!</span>
            </p>
            <button id="hint-btnOff" class="btn btn-dark">OFF</button>
            <button id="hint-btnOn" class="btn btn-dark">ON</button>
          </div>`;
      console.log("themore");

      return;
    } else if (playerChoice < computerChoice) {
      winner.innerHTML = `<div id="results-div">
            <h3>
              Result: <span id="result"></span>
            </h3>
            <p class="text-muted hint-on-off">
              <span id="hint"Computers last guess was less than yours, try guessing higher!!</span>
            </p>
            <button id="hint-btnOff" class="btn btn-dark">OFF</button>
            <button id="hint-btnOn" class="btn btn-dark">ON</button>
          </div>`;
      console.log("theless");

      return;
    }
  };

  toggleHints();
  playGame();
  startGame();
};

game();

///hints are not working once the p text has been inserted dymanically and does not change once it's been changed once. It just stays the same
