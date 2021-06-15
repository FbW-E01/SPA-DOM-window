const gameAnswer = Math.floor(Math.random() * 10) + 1;

const answer = prompt("Guess a number from 1-10");
if (gameAnswer == answer) {
  alert("you win!!!!");
} else {
  const answer2 = prompt("try again");
  if (gameAnswer == answer2) {
    alert("you win!!!!");
  } else {
    const answer3 = prompt("try again");
    if (gameAnswer == answer3) {
      alert("you win!!!!");
    } else {
      alert(
        "Sorry, you failed to guess the number in three attempts. The number was " +
          gameAnswer
      );
    }
  }
}
