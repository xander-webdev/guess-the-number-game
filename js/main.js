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
  startGame();

  const toggleHints = () => {
    const hintsOff = document.querySelector("#hint-btnOff");
    const hintsOn = document.querySelector("#hint-btnOn");
    const hintText = document.querySelector(".hint-on-off");

    hintsOff.addEventListener("click", () => {
      hintText.classList.add("fadeOut");
      hintText.classList.remove("fadeIn");

    });
    hintsOn.addEventListener("click", () => {
      hintText.classList.add("fadeIn");
      hintText.classList.remove("fadeOut");
    });
  };
  toggleHints();
};
game();
