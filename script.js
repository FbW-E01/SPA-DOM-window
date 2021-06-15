const randomNumber = Math.round(Math.random() * 10 + 1);

// alert(question);

for (i = 0; i <= 2; i++) {
  const question = prompt("Guess a number between 1 and 10");
  if (question == randomNumber) {
    alert("Won game!");
  } else {
    y = i + 1;
    alert("Attempt no. " + y);
    alert("Wrong answer!");
  }
}
alert(
  "Sorry, you failed to guess the number in three attempts. The number was " +
    randomNumber
);
