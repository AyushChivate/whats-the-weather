/* // test data 1
const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;

// test data 2
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

// calculate BMIs
let markBMI1 = markWeight1 / markHeight1 ** 2;
let johnBMI1 = johnWeight1 / johnHeight1 ** 2;

let markBMI2 = markWeight2 / markHeight2 ** 2;
let johnBMI2 = johnWeight2 / johnHeight2 ** 2;

// comparison
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

// logging
console.log(
    "Mark's BMI:",
    markBMI1,
    "John's BMI:",
    johnBMI1,
    "Is Mark's BMI higher?:",
    markHigherBMI1
);
console.log(
    "Mark's BMI:",
    markBMI2,
    "John's BMI:",
    johnBMI2,
    "Is Mark's BMI higher?:",
    markHigherBMI1
);

// template literals
let str = `Mark's weight is ${markWeight1} while John's weight is ${johnWeight1}`;
console.log(str);

// if/else
if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI is higher at ${markBMI1}.`);
} else {
    console.log(`John's BMI is higher ${johnBMI1}.`);
}

// if/else
if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI is higher at ${markBMI2}.`);
} else {
    console.log(`John's BMI is higher ${johnBMI2}.`);
}

const favorite = Number(prompt("Enter your favorite number."));

if (favorite === 23) console.log("this is my favorite number!"); */

// TEST DATA
/* const d1 = 96;
const d2 = 108;
const d3 = 89;

const k1 = 88;
const k2 = 91;
const k3 = 110; */

// TEST DATA BONUS 1
/* const d1 = 97;
const d2 = 112;
const d3 = 101;

const k1 = 109;
const k2 = 95;
const k3 = 123; */

// TEST DATA BONUS 2
/* const d1 = 97;
const d2 = 112;
const d3 = 101;

const k1 = 109;
const k2 = 95;
const k3 = 106; */

// calculate averages
/* const dAvg = (d1 + d2 + d3) / 3;
const kAvg = (k1 + k2 + k3) / 3; */

// EXERCISE 1
/* if (dAvg === kAvg) {
    console.log(`There was a tie! Both teams got an average score of ${dAvg}.`);
} else if (dAvg > kAvg) {
    console.log(
        `The Dolphins win with an average score of ${dAvg}. The Koalas had an average score of ${kAvg}.`
    );
} else {
    console.log(
        `The Koalas win with an average score of ${kAvg}. The Dolphins had an average score of ${dAvg}.`
    );
} */

// BONUS 1
/* if (dAvg === kAvg) {
    console.log(`There was a tie! Both teams got an average score of ${dAvg}.`);
} else if (dAvg > kAvg && dAvg >= 100) {
    console.log(
        `The Dolphins win with an average score of ${dAvg}. The Koalas had an average score of ${kAvg}.`
    );
} else if (kAvg > dAvg && kAvg >= 100) {
    console.log(
        `The Koalas win with an average score of ${kAvg}. The Dolphins had an average score of ${dAvg}.`
    );
} else {
    console.log(`Neither team won! Dolphins (${dAvg}) Koalas (${kAvg}).`);
} */

// BONUS 2
/* if (dAvg === kAvg && dAvg >= 100 && kAvg >= 100) {
    console.log(`There was a tie! Both teams got an average score of ${dAvg}.`);
} else if (dAvg > kAvg && dAvg >= 100) {
    console.log(
        `The Dolphins win with an average score of ${dAvg}. The Koalas had an average score of ${kAvg}.`
    );
} else if (kAvg > dAvg && kAvg >= 100) {
    console.log(
        `The Koalas win with an average score of ${kAvg}. The Dolphins had an average score of ${dAvg}.`
    );
} else {
    console.log(`Neither team won! Dolphins (${dAvg}) Koalas (${kAvg}).`);
} */

/* const day = "monday";

if (day === "monday") {
} else if (day === "tuesday") {
} else if (day === "wednesday" || day === "thursday") {
} else if (day === "friday") {
} else if (day === "saturday" || day == "sunday") {
} else {
} */

// let tip = 0;
// const bill = 275 /* 40 */ /* 430 */ ;

// console.log(
//     `Bill value: ${bill}\nTip: ${(tip =
//         bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill)}\nBill + tip: ${
//         bill + tip
//     }`
// );

/* let bill = Number(prompt("How much is the bill?"));
let tip = Number(prompt("How much is the tip?"));
alert(`The total is ${bill * tip / 100}`); */

// "use strict";

// // console.log(document.querySelector(".message").textContent);
// // document.querySelector(".message").textContent = "🎉 Correct Number!";

// // document.querySelector(".number").textContent = 13;
// // document.querySelector(".score").textContent = 10;

// // document.querySelector(".guess").value = 23;
// // console.log(document.querySelector(".guess").value);

// const generateSecretNumber = function () {
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
// };

// const disableButton = function () {
//     document.querySelector(".check").disabled = true;
//     document.querySelector(".check").style.opacity = "0.6";
//     document.querySelector(".check").style.cursor = "not-allowed";
// };

// const displayMessage = function (message) {
//     document.querySelector(".message").textContent = message;
// };

// let secretNumber = 0;

// generateSecretNumber();

// console.log(secretNumber);

// let score = 20;

// let highScore = 0;

// // check button
// document.querySelector(".check").addEventListener("click", () => {
//     const guess = Number(document.querySelector(".guess").value);

//     if (!guess) {
//         displayMessage("🚫 No Number!");
//     } else if (guess === secretNumber) {
//         displayMessage("🎉 You Win!");
//         document.querySelector(".number").textContent = secretNumber;
//         document.querySelector("body").style.backgroundColor = "#60b347";
//         document.querySelector(".number").style.width = "30rem";
//         disableButton();

//         if (score > highScore) {
//             highScore = score;
//         }
//         document.querySelector(".highscore").textContent = highScore;
//     } else if (score === 1) {
//         displayMessage("😟 You Lose!");
//         document.querySelector(".score").textContent = 0;
//         disableButton();
//         // document.querySelector(".check").style.onmouseover = "disabled = true";
//     } else if (guess !== secretNumber) {
//         displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
//         document.querySelector(".score").textContent = --score;
//     }
// });

// // play again button
// document.querySelector(".again").addEventListener("click", () => {
//     displayMessage("Start guessing...");

//     document.querySelector(".guess").value = "";

//     document.querySelector(".number").textContent = "?";
//     document.querySelector(".number").style.width = "15rem";
//     generateSecretNumber();
//     console.log(secretNumber);

//     document.querySelector(".score").textContent = "20";
//     score = 20;

//     document.querySelector("body").style.backgroundColor = "#222";

//     document.querySelector(".check").disabled = false;
//     document.querySelector(".check").style.opacity = "1";
//     document.querySelector(".check").style.cursor = "pointer";
// });
