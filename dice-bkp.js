let randomNumber = null;
let timer;
let interval;
let selectedResponse = null;

const submitButtonElement = document.getElementById("submit-button");
// submitButtonElement.disabled = true;

document
  .getElementById("start-button")
  .addEventListener("click", startGame, startTimer);

document
  .getElementById("restart-button")
  .addEventListener("click", restartGame);

document.getElementById("submit-button").addEventListener("click", submitGuess);

function startGame() {
  document.getElementById("game-divison").style.display = "block";
  document.getElementById("start-divison").style.display = "none";
  startTimer();
  genrateRandomNumber();
}

const startButtonElement = document.getElementById("start-button");
const timerDisplayElement = document.getElementById("timer-display");

function startTimer() {
  let timeLeft = 10;
  timerDisplayElement.textContent = timeLeft;

  interval = setInterval(() => {
    timeLeft -= 1;
    timerDisplayElement.textContent = timeLeft;

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
  document.getElementById("generatedNumber").textContent =
    "Generated number is :" + randomNumber;

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
  document.getElementById("restart-divison").style.display = "block";

  if (randomNumber === null && selectedResponse === null) {
    document.getElementById("message").innerHTML =
      "Please click on <b>Start</b> to begin";
  } else if (parseInt(selectedResponse) === randomNumber) {
    document.getElementById("message").textContent =
      "Congrats! You guessed it right.";
  } else {
    document.getElementById("message").textContent = "Better luck Next time";
  }
  stopTimer();
}

function restartGame() {}
