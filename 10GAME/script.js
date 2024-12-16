let userScore = 0;
let computerScore = 0;

const choices = document.getElementsByTagName("button");

const genCompChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.round() * 3);
  return choices[randIdx];
};

const drawGame = () => {
  console.log("it's a draw!");
};
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    console.log("You Win!");
  } else {
    computerScore++;
    console.log("YOu lose!");
  }
  console.log(`User Score: ${userScore}, Computer Score: ${computerScore}`);
};
const playGame = (userChoice) => {
  console.log("User Choice = ", userChoice);
  const compChoice = genCompChoice();
  console.log("Computer Choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("choice");
    playGame(userChoice);
  });
});
