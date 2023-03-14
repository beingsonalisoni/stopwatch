// Variable Declaration
let startTime;
let elapsedTime = 0;
let timerInterval;

// Maximum Time Constants for 2 Digit Values
const MAX_MINUTES = 99;
const MAX_SECONDS = 59;
const MAX_MILLISECONDS = 99;


// Function to start the Stopwatch
function startTimer() {
    if(timerInterval) {
        return;
    }
    
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
        elapsedTime = Date.now() - startTime;
        const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        const seconds = Math.floor((elapsedTime / 1000) % 60);
        const milliseconds = Math.floor((elapsedTime % 1000) / 10);
        document.getElementById("display").innerText =
            `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;

        if(minutes === MAX_MINUTES && seconds === MAX_SECONDS && milliseconds === MAX_MILLISECONDS) {
            clearInterval(timerInterval);
            alert("Maximum Time Reached!!");
        }
    }, 10);
}

// Function to stop the Stopwatch
function stopTimer() {
    clearInterval(timerInterval);
}

// Function to reset the Stopwatch
function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerInterval = null;
    document.getElementById("display").innerText = "00:00:00";
}

// Adding event listeners to start, stop & reset button
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
