let n = Math.floor(Math.random() * 99);
let correctMessage = "Congrats";

let guessInput = document.querySelector("#input");
let guessButton = document.querySelector("#button");
let resetButton = document.querySelector("#resetButton");
let guessResult = document.querySelector("#result");
let guessTry = document.querySelector("#try");
let guessAttempt = document.querySelector("#attempt");
let score = document.querySelector("#score");
let win = 0;
let loose = 0;
let numberOfAttempt = 0;

function guess() {
    if (guessInput.value == n) {
        numberOfAttempt += 1;
        if (numberOfAttempt <= 7) {
            guessResult.textContent = "Congratulation you guessed within 7 attempts!";
            win += 1;
            guessButton.disabled = true;
        }
        else {
            guessResult.textContent = correctMessage;
            loose += 1;
        }
        document.body.style.backgroundColor = "green";
        score.textContent = "win: " + win + " | loose: " + loose;
    }
    else if (numberOfAttempt >= 7) {
        document.body.style.backgroundColor = "red";
        guessResult.textContent = "You lost, wright number: " + n;
        guessButton.disabled = true;
    }
    else {
        guessResult.textContent = "wrong number";
        document.body.style.backgroundColor = "red";
        if (guessInput.value < n) {
            guessTry.textContent = "guess low";
        }
        else {
            guessTry.textContent = "guess high";
        }
        guessAttempt.textContent += guessInput.value + ", ";
        numberOfAttempt += 1;
    }

}

function reset() {
    n = Math.floor(Math.random() * 99);
    numberOfAttempt = 0;
    document.body.style.backgroundColor = "white";
    guessResult.textContent = "";
    guessAttempt.textContent = "";
    guessTry.textContent = "";
    guessButton.disabled = false;
}
guessButton.addEventListener("click", guess);

resetButton.addEventListener("click", reset);
