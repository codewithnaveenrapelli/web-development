/*
The code assumes that there is an HTML document with elements having the following IDs: "start," "stop," "reset," and "timer."
These elements are likely buttons for starting, stopping, resetting the timer, and displaying the timer.
Variable Declarations:

const startEl, stopEl, resetEl, and timerEl are constants representing references to HTML elements with corresponding IDs.
let interval is a variable that will be used to store the interval ID returned by setInterval.
let timeLeft = 1500 initializes a variable to represent the initial time left on the timer, which is set to 1500 seconds (25 minutes).
updateTimer Function:

This function calculates the minutes and seconds remaining from the timeLeft variable and updates the inner HTML of the element with the ID "timer" to display the formatted time.
startTimer Function:

This function uses setInterval to decrement the timeLeft variable every second.
It calls the updateTimer function to display the updated time.
If the timer reaches 0, it clears the interval, displays an alert, resets the time to 1500 seconds, and updates the timer display.
stopTimer Function:

This function clears the interval, effectively stopping the timer.
resetTimer Function:

This function stops the timer (clears the interval), resets the timeLeft variable to 1500 seconds, and updates the timer display.
Event Listeners:

Event listeners are attached to the "start," "stop," and "reset" buttons, calling the corresponding functions (startTimer, stopTimer, resetTimer) when the buttons are clicked


${min.toString().padStart(2, "0")}: This part of the code converts the minutes (min) to a string, and then uses the padStart method to ensure that the string is at least 2 characters long. If the original string is less than 2 characters, it pads the string with "0" at the beginning. This is done to ensure that the minutes are always displayed with at least two digits.

" : ": This part of the code is a string literal containing a space, colon, and another space. It's used to separate the minutes and seconds in the final formatted time string.

${sec.toString().padStart(2, "0")}: Similar to the minutes, this part converts the seconds (sec) to a string and pads it with "0" on the left if it is less than 2 characters long.

*/


const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");


let interval = 0;
let timeLeft = 1500;

function updateTimer() {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft * 60;
    let formattedTime = `${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2,
        "0")}`;
    timer.innerHTML = formattedTime;
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time is up");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
