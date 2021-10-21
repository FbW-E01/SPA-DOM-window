function theRandomNumber() {
  return Math.floor(Math.random() * 10);
}

const theNumber = theRandomNumber().toString();
// console.log(theRandomNumber());
const answer = prompt("Guess a number between 1 - 10:");

if (theNumber == answer) {
  alert("Success, the number was " + answer + "! Attempts: 1");
} else {
  let guess2 = prompt("Wrong!!! Try Again!");
  if (theNumber == guess2) {
    alert("Success, the number was " + guess2 + "! Attempts: 2");
  } else {
    let guess3 = prompt("Wrong again!!! This is your last chance!");
    if (theNumber == guess3) {
      alert("Success, the number was " + guess3 + "! Attempts: 3");
    } else {
      alert(
        "Sorry, you failed to guess the number in three attempts. The number was " +
          theNumber +
          "!"
      );
    }
  }
}
