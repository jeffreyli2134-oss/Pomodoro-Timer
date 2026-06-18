let timer;
let totalSeconds = 1500;
let timeRemaining = totalSeconds;
let running = false;

let selectedActivity = "";

const homeScreen = document.getElementById("homeScreen");
const setupScreen = document.getElementById("setupScreen");
const timerScreen = document.getElementById("timerScreen");
const resultsScreen = document.getElementById("resultsScreen");

const setupTitle = document.getElementById("setupTitle");
const activityButtons = document.querySelectorAll(".activityBtn");

const timerElement = document.getElementById("timer");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const pauseButton = document.getElementById("pause");
const progress = document.querySelector(".progress");

const beginsession = document.getElementById("beginSession");
const activityName = document.getElementById("activityName");

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

    getRandomQuote();
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

const quotes = [

    "Small progress is still progress.",
    "One session is better than none.",
    "Focus on the next step.",
    "Future you will thank present you.",
    "Done is better than perfect."
];

const quoteElement = document.getElementById("quote");

function getRandomQuote() {

    let randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];

}

function showScreen(screenName) {
    homeScreen.style.display = "none";
    setupScreen.style.display = "none";
    timerScreen.style.display = "none";
    resultsScreen.style.display = "none";

if (screenName === "home") {
    homeScreen.style.display = "block";
}

if (screenName === "setup") {
    setupScreen.style.display = "block";
}

if (screenName === "timer") {
    timerScreen.style.display = "block";
}

if (screenName === "results") {
    resultsScreen.style.display = "block";
}
}

activityButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedActivity = button.getAttribute("data-activity");
        setupTitle.textContent = "Selected Activity: " + selectedActivity;
        activityName.textContent = selectedActivity;
        showScreen("setup");
    });

});

  beginsession.addEventListener("click", function() {
        showScreen("timer");
    });

showScreen("home");