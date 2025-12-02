let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

const drawGame = () => {
  
  msg.innerText = "game draw play again";
  msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userchoice, compChoice) => {
  if (userWin) {
    userscore++;
    userscorep.innerText = userscore;
    msg.innerText = `You Win ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorep.innerText = compscore;
    msg.innerText = `you lose ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {

  const compChoice = gencompchoice();
 

  if (userchoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
   
    playGame(userchoice);
  });
});
