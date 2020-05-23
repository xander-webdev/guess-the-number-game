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
  
};
game();
