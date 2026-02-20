let credits = 50;
let cardArray = [];
let playedCard = [];
let mise = 0;
let score = 0;
let bestScore = 0;
let tempScore = 0;

let carte = document.createElement("img");
carte.src = "img/main.jpg";
carte.style.width = "115px";
carte.style.height = "140px";
carte.style.borderRadius = "10%"

let div = document.querySelector("#card");
div.appendChild(carte);


let pickcardBtn = document.querySelector("#pickcard");
let restBtn = document.querySelector("#rest");
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");

document.querySelector("#credit").textContent = "Your credits: " + credits;
document.querySelector("#score").textContent = "Your score: " + score;
document.querySelector("#bestScore").textContent = "Your best score: " + bestScore;

pickcardBtn.style.display = "none";
restBtn.style.display = "none";
resetBtn.style.display = "none";

startBtn.addEventListener("click", initializeGame);
resetBtn.addEventListener("click", reset);
pickcardBtn.addEventListener("click", pickCard);
restBtn.addEventListener("click", rest);

function initializeGame() {
    cardArray = [
        { name: "as_c", value: 11, src: "img/as_c.jpg" },
        { name: "as_d", value: 11, src: "img/as_d.jpg" },
        { name: "as_h", value: 11, src: "img/as_h.jpg" },
        { name: "as_s", value: 11, src: "img/as_s.png" },
        { name: "eight_c", value: 8, src: "img/eight_c.jpg" },
        { name: "eight_d", value: 8, src: "img/eight_d.jpg" },
        { name: "eight_h", value: 8, src: "img/eight_h.webp" },
        { name: "eight_s", value: 8, src: "img/eight_s.jpg" },
        { name: "five_c", value: 5, src: "img/five_c.jpg" },
        { name: "five_d", value: 5, src: "img/five_d.jpg" },
        { name: "five_h", value: 5, src: "img/five_h.jpg" },
        { name: "five_s", value: 5, src: "img/five_s.jpg" },
        { name: "four_c", value: 4, src: "img/four_c.jpg" },
        { name: "four_d", value: 4, src: "img/four_d.jpg" },
        { name: "four_h", value: 4, src: "img/four_h.jpg" },
        { name: "four_s", value: 4, src: "img/four_s.jpg" },
        { name: "jack_c", value: 10, src: "img/jack_c.jpg" },
        { name: "jack_d", value: 10, src: "img/jack_d.avif" },
        { name: "jack_h", value: 10, src: "img/jack_h.webp" },
        { name: "jack_s", value: 10, src: "img/jack_s.jpg" },
        { name: "king_c", value: 10, src: "img/king_c.jpg" },
        { name: "king_d", value: 10, src: "img/king_d.avif" },
        { name: "king_h", value: 10, src: "img/king_h.jpg" },
        { name: "king_s", value: 10, src: "img/king_s.jpg" },
        { name: "nine_c", value: 9, src: "img/nine_c.jpg" },
        { name: "nine_d", value: 9, src: "img/nine_d.jpg" },
        { name: "nine_h", value: 9, src: "img/nine_h.jpg" },
        { name: "nine_s", value: 9, src: "img/nine_s.jpg" },
        { name: "queen_c", value: 10, src: "img/queen_c.jpg" },
        { name: "queen_d", value: 10, src: "img/queen_d.jpg" },
        { name: "queen_h", value: 10, src: "img/queen_h.jpg" },
        { name: "queen_s", value: 10, src: "img/queen_s.avif" },
        { name: "seven_c", value: 7, src: "img/seven_c.jpg" },
        { name: "seven_d", value: 7, src: "img/seven_d.jpg" },
        { name: "seven_h", value: 7, src: "img/seven_h.jpg" },
        { name: "seven_s", value: 7, src: "img/seven_s.avif" },
        { name: "six_c", value: 6, src: "img/six_c.jpg" },
        { name: "six_d", value: 6, src: "img/six_d.jpg" },
        { name: "six_h", value: 6, src: "img/six_h.jpg" },
        { name: "six_s", value: 6, src: "img/six_s.jpg" },
        { name: "ten_c", value: 10, src: "img/ten_c.jpg" },
        { name: "ten_d", value: 10, src: "img/ten_d.jpg" },
        { name: "ten_h", value: 10, src: "img/ten_h.jpg" },
        { name: "ten_s", value: 10, src: "img/ten_s.jpg" },
        { name: "three_c", value: 3, src: "img/three_c.jpg" },
        { name: "three_d", value: 3, src: "img/three_d.jpg" },
        { name: "three_h", value: 3, src: "img/three_h.jpg" },
        { name: "three_s", value: 3, src: "img/three_s.jpg" },
        { name: "two_c", value: 2, src: "img/two_c.jpg" },
        { name: "two_d", value: 2, src: "img/two_d.jpg" },
        { name: "two_h", value: 2, src: "img/two_h.jpg" },
        { name: "two_s", value: 2, src: "img/two_s.jpg" }
    ];
    tempScore = 0;
    playedCard = [];

    startBtn.style.display = "none";
    pickcardBtn.style.display = "";
    restBtn.style.display = "";
    mise = parseInt(document.querySelector("#mise").value);
    document.querySelector("#mise").style.display = "none";
    document.querySelector("#validateMise").textContent = " " + mise;

}

function pickCard() {
    let randomIndex = Math.floor(Math.random() * cardArray.length);
    let value = cardArray[randomIndex].value;
    let carte = document.createElement("img");
    carte.src = cardArray[randomIndex].src;
    playedCard.push(cardArray.splice(randomIndex, 1)[0].value);
    carte.style.width = "115px";
    carte.style.height = "140px";
    carte.style.borderRadius = "10%"

    let div = document.querySelector("#playedCard");
    div.appendChild(carte);

    tempScore += value;
    if (tempScore > 21) {
        if (playedCard.includes(11)) {
            tempScore -= 10;
            playedCard.splice(playedCard.indexOf(11), 1, 1);

        } else {
            pickcardBtn.disabled = true;
            restBtn.disabled = true;
            let message = document.querySelector("#message");
            message.textContent = "You lose !";
            message.style.color = "red";
            resetBtn.style.display = "";
            credits -= mise;
            if (credits <= 0) {
                message.textContent = "Game over ! You are out of credits. Try again !";
                message.style.color = "red";
                if (score > bestScore) {
                    bestScore = score;
                }
                score = 0;
                credits = 50;
            }
        }
    }

}

function rest() {
    pickcardBtn.disabled = true;
    restBtn.disabled = true;
    playedCard = [];
    let tmp = 0;
    while (tmp < 16) {
        let randomIndex = Math.floor(Math.random() * cardArray.length);
        tmp += cardArray[randomIndex].value;
        let bankCard = document.createElement("img");
        bankCard.src = cardArray[randomIndex].src;
        playedCard.push(cardArray.splice(randomIndex, 1)[0].value);
        if (playedCard.includes(11) && tmp > 21) {
            tmp -= 10;
            playedCard.splice(playedCard.indexOf(11), 1, 1);
        }
        bankCard.style.width = "115px";
        bankCard.style.height = "140px";
        bankCard.style.borderRadius = "10%"

        let div = document.querySelector("#card");
        div.appendChild(bankCard);
    }
    if (tmp > 21) {
        document.querySelector("#message").textContent = "You win !";
        document.querySelector("#message").style.color = "green";
        credits += mise;
        score += mise;
    } else if (tmp === tempScore) {
        document.querySelector("#message").textContent = "It's a tie !";
        document.querySelector("#message").style.color = "orange";
    } else if (tmp > tempScore) {
        document.querySelector("#message").textContent = "You lose !";
        document.querySelector("#message").style.color = "red";
        credits -= mise;
    } else if (tmp < tempScore) {
        document.querySelector("#message").textContent = "You win !";
        document.querySelector("#message").style.color = "green";
        credits += mise;
        score += mise;
    }
    resetBtn.style.display = "";
    if (credits <= 0) {
        message.textContent = "Game over ! You are out of credits. Try again !";
        message.style.color = "red";
        if (score > bestScore) {
            bestScore = score;
        }
        score = 0;
        credits = 50;
    }

}

function reset() {
    tempScore = 0;
    div.innerHTML = "";
    div.appendChild(carte);
    document.querySelector("#playedCard").innerHTML = "";
    document.querySelector("#message").textContent = "";
    document.querySelector("#mise").value = "";
    document.querySelector("#mise").style.display = "";
    document.querySelector("#validateMise").textContent = "";
    startBtn.style.display = "";
    pickcardBtn.style.display = "none";
    pickcardBtn.disabled = false;
    restBtn.style.display = "none";
    restBtn.disabled = false;
    resetBtn.style.display = "none";

    document.querySelector("#credit").textContent = "Your credits: " + credits;
    document.querySelector("#score").textContent = "Your score: " + score;
    document.querySelector("#bestScore").textContent = "Your best score: " + bestScore;


}