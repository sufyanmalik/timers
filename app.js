//Hidden message

document.getElementById("action").addEventListener("click", function () {
  const message = document.getElementById("confirmation");
  message.style.display = "block";

  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
});

//Stopwatch

// define variables and link const to button
let timerInterval = null;
let seconds = 0;
const timerDisplay = document.getElementById("timer");
const button = document.getElementById("start");

//add event listener
button.addEventListener("click", function () {
  if (timerInterval === null) {
    button.textContent = "Stop";
    timerInterval = setInterval(() => {
      seconds++;
      timerDisplay.textContent = `${seconds} seconds`;
    }, 1000);
  } else {
    button.textContent = "Start";
    clearInterval(timerInterval);
    timerInterval = null;
  }
});
