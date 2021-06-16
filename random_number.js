
const randomNumber = Math.floor(Math.random() * 10) + 1;
let guessNumber = prompt("Guess a number between 1 and 10");
let attempts = 1;

while (guessNumber != randomNumber && attempts < 3) {
attempts++;
guessNumber = prompt("Wrong!!! Try Again!");
}
if (guessNumber == randomNumber) {
    alert(`Success, the number was ${guessNumber}! Attemps: ${attemps}`);
} else if (attempts == 3) {
    alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`);
}