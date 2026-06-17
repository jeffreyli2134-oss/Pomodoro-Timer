let timer;
let totalSeconds = 10;
let timeRemaining = totalSeconds;
let running = false;

const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const pauseButton = document.getElementById("pause");
const progress = document.querySelector(".progress");

function updateTimer() {
    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    timerElement.textContent = minutes + ":" + seconds;

    let progressPercent = (timeRemaining / totalSeconds) * 100;
    progress.style.width = progressPercent + "%";
}

updateTimer();

startButton.addEventListener("click", function() {
    if (running) {
        return;
    }

    running = true;

    timer = setInterval(function() {
        timeRemaining--;

        if (timeRemaining <= 0) {
            timeRemaining = 0;
            clearInterval(timer);
            running = false;
        }

        updateTimer();
    }, 1000);
});

resetButton.addEventListener("click", function() {
    clearInterval(timer);
    running = false;
    timeRemaining = totalSeconds;
    updateTimer();
});

pauseButton.addEventListener("click", function() {
    clearInterval(timer);
    running = false;
});