let randomNumber = null;
let timer;
let interval;
let selectedResponse = null;

const gameDivisonElement = document.getElementById("game-divison");
const startDivisonElement = document.getElementById("start-divison");
const startButtonElement = document.getElementById("start-button");
const submitButtonElement = document.getElementById("submit-button");
const restartDivisonElement = document.getElementById("restart-divison");
const restartButtonElement = document.getElementById("restart-button");
const generatedNumberElement = document.getElementById("generated-number");

const timerDisplayElement = document.getElementById("timer-display");
const messageElement = document.getElementById("message");

const imageButtons = document.querySelectorAll(".image-button");

const timeupModalElement = document.getElementById("timeup-modal");
const startOverButtonElement = document.getElementById("start-over");
const endGameButtonElement = document.getElementById("end-game");

startButtonElement.addEventListener("click", startGame);
submitButtonElement.addEventListener("click", submitGuess);

restartButtonElement.addEventListener("click", restartGame);
startOverButtonElement.addEventListener("click", restartGame);

document.addEventListener("DOMContentLoaded", () => {
  const imageButtons = document.querySelectorAll(".image-button");
  const submitButton = document.getElementById("submit-button");
  imageButtons.forEach((button) => (button.disabled = true));
  submitButton.disabled = true;
});

function restartGame() {
  resetGame();
  startGame();
}

function startGame() {
  startDivisonElement.style.display = "none";
  startButtonElement.disabled = true;
  resetGame();
  startTimer();
  genrateRandomNumber();
}

function startTimer() {
  let timeLeft = 5;
  timerDisplayElement.textContent = `Time left : ${timeLeft}`;

  interval = setInterval(() => {
    timeLeft -= 1;
    timerDisplayElement.textContent = `Time left : ${timeLeft}`;

    if (timeLeft <= 0) {
      timeupPopup();
      resetTimer();
    }
  }, 1000);
}

function timeupPopup() {
  timeupModalElement.classList.remove("hidden");
}

function resetTimer() {
  clearInterval(interval);
}

function genrateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 6) + 1;
}

imageButtons.forEach((startButtonElement) => {
  startButtonElement.addEventListener("click", () => {
    imageButtons.forEach((btn) => btn.classList.remove("selected"));
    startButtonElement.classList.add("selected");
    selectedResponse = startButtonElement.getAttribute("data-value");
    submitButtonState();
    console.log("Selected Response:", selectedResponse);
  });
});

function submitButtonState() {
  if (selectedResponse === null) {
    submitButtonElement.disabled = true;
  } else {
    submitButtonElement.disabled = false;
  }
}

function submitGuess() {
  submitButtonElement.disabled = true;

  imageButtons.forEach((btn) => (btn.disabled = true));

  restartDivisonElement.style.display = "block";
  generatedNumberElement.style.display = "block";

  if (parseInt(selectedResponse) === randomNumber) {
    messageElement.textContent = "Congrats! You guessed it right.";
    generatedNumberElement.style.display = "none";
    // rightGuessMemeElement.style.display = "block";
  } else {
    messageElement.innerHTML = `Better luck Next time! <br> Winning number was : ${randomNumber}`;
    //  wrongGuessMemeElement.style.display = "block";
  }
  resetTimer();
}

function resetGame() {
  resetTimer();
  randomNumber = null;
  imageButtons.forEach((btn) => btn.classList.remove("selected"));
  timeupModalElement.classList.add("hidden");
  restartDivisonElement.style.display = "none";
  imageButtons.forEach((btn) => (btn.disabled = false));
  startButtonElement.display = "none";
  messageElement.textContent = "";
  generatedNumberElement.textContent = "";
}

/* function startOverGame() {
  resetGame();
} */

function endGame() {
  timeupModalElement.classList.add("hidden");
  console.log(hi);
}
