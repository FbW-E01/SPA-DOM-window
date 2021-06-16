const randomNumber = (Math.floor(Math.random() * 10) + 1).toString();

for (let i = 0; i < 3; i++) {
  const guess = prompt("Guess a number between 1 - 10:");
  if (randomNumber === guess) {
    alert(`Success, the number was ${randomNumber}! Attempts: ${i+1}`);
    break;
  }
  if (i === 2) {
    alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`);
  }
}

// if (randomNumber === guess) {
//   alert(`Success, the number was ${randomNumber}! Attempts: 1`);
// } else if (randomNumber === prompt("Nope, sorry! Try again!")) {
//   alert(`Success, the number was ${randomNumber}! Attempts: 2`);
// } else if (randomNumber === prompt("Nope, sorry! Try again!")) {
//   alert(`Success, the number was ${randomNumber}! Attempts: 3`);
// } else {
//   alert(`Sorry, you failed to guess the number in three attempts. The number was ${randomNumber}!`);
// }