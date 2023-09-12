const prompt = require("prompt-sync")();

const target = 10 + Math.round(Math.random() * 100);

let guesses = 0;
console.log(target);

while (true) {
  const guess = Number(prompt("Guess the number (0-100): "));

  if (guess > target) {
    console.log("Your guess is too high");
  } else if (guess < target) {
    console.log("Your guess is too low");
  } else {
    console.log("Congratulations you guessed!!!");
    break;
  }
}
