`use strict`

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const formEL = document.getElementById("form")
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}

scoreEl.innerText = `score:${score}`;


questionEl.innerHTML = `what is ${num1} multiplied by ${num2} ?`;
let correctAns = num1 * num2;

formEL.addEventListener("submit", () => {
    const userAnswer = +inputEl.vaue;
    if (userAnswer === correctAns) {
        score = score + 1;
        updateLocalStorage();
    }
    else {
        score = score - 1;
        updateLocalStorage();
    }

});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}





// if (result) {
//     score += 1;

// }

// console.log(result);