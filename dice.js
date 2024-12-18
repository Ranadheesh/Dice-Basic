let randomNumber = null;
let timer;
let interval;
let selectedResponse = null;
let score = 5;
let remainingNumbers = [];

const submitButtonElement = document.getElementById("submit-button");
const gameDivisonElement = document.getElementById("game-divison");
const startDivisonElement = document.getElementById("start-divison");
const restartDivisonElement = document.getElementById("restart-divison");
const generatedNumberElement = document.getElementById("generated-number");
const rightGuessMemeElement = document.getElementById("right-guess-meme");
const wrongGuessMemeElement = document.getElementById("wrong-guess-meme");

document
  .getElementById("start-button")
  .addEventListener("click", startGame, startTimer);

document
  .getElementById("restart-button")
  .addEventListener("click", restartGame);

document.getElementById("submit-button").addEventListener("click", submitGuess);

function startGame() {
  gameDivisonElement.style.display = "block";
  startDivisonElement.style.display = "none";
  startTimer();
  //score = 5;
  //remainingNumbers = Array.from({ length: 6 }, (_, i) => i + 1);
  //rangeDisplay.textContent = remainingNumbers.length;
  genrateRandomNumber();
}

const startButtonElement = document.getElementById("start-button");
const timerDisplayElement = document.getElementById("timer-display");

function startTimer() {
  let timeLeft = 10;
  timerDisplayElement.textContent = `You have ${timeLeft} seconds left`;

  interval = setInterval(() => {
    timeLeft -= 1;
    timerDisplayElement.textContent = `You have ${timeLeft} seconds left`;

    if (timeLeft == 0) {
      clearInterval(interval);
      document.getElementById("restart-button").click();
      alert("Time's Up!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function genrateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  document.getElementById("generated-number").textContent =
    "Winning number was :" + randomNumber;

  //console.log(randomNumber);
}

const imageButtons = document.querySelectorAll(".image-button");

imageButtons.forEach((startButtonElement) => {
  startButtonElement.addEventListener("click", () => {
    imageButtons.forEach((btn) => btn.classList.remove("selected"));

    startButtonElement.classList.add("selected");
    selectedResponse = startButtonElement.getAttribute("data-value");
    submitButtonState();
    //console.log("Selected Response:", selectedResponse);
  });
});

function submitButtonState() {
  if (selectedResponse === null) {
    submitButtonElement.disabled = true;
  } else {
    submitButtonElement.disabled = false;
  }
}
console.log(selectedResponse);

function submitGuess() {
  submitButtonElement.disabled = true;
  gameDivisonElement.style.display = "none";
  restartDivisonElement.style.display = "block";
  generatedNumberElement.style.display = "block";

  if (parseInt(selectedResponse) === randomNumber) {
    document.getElementById("message").textContent =
      "Congrats! You guessed it right.";
    generatedNumberElement.style.display = "none";
    rightGuessMemeElement.style.display = "block";
  } else {
    document.getElementById("message").textContent = "Better luck Next time";
    wrongGuessMemeElement.style.display = "block";
  }
  stopTimer();
}

function restartGame() {}
