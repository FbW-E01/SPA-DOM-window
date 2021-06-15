let guessedNumber = prompt("Guess a number between 1 and 10");

let randomNumber = String(Math.floor(Math.random() * 10) + 1);
console.log(randomNumber);
console.log(guessedNumber);

if (guessedNumber === randomNumber) {
    alert("Success, the number was "+randomNumber+"! Attempts: 1");
} else {
    guessedNumber = prompt("Wrong!!! Try again!");
    if (guessedNumber === randomNumber) {
        alert("Success, the number was "+randomNumber+"! Attempts: 2");
    } else {
        guessedNumber = prompt("Wrong!!! Try again!");
        if (guessedNumber === randomNumber) {
            alert("Success, the number was "+randomNumber+"! Attempts: 3");
        } else {
        alert("Sorry, you failed to guess the number in three attempts. The number was "+randomNumber+"!")
        };
    };
};
// My trials, that didn't work....
// let counter;
// const wonGameMessage = window.alert("Success, the number was "+randomNumber+"! Attempts: "+counter+"");
// const lostGameMessage = window.alert("Sorry, you failed to guess the number in three attempts. The number was "+randomNumber+"!")

// if (guessedNumber === randomNumber && counter <= 3) {
//     counter++;
//     console.log(wonGameMessage);
// } else if (guessedNumber !== randomNumber && counter < 3) {
//     counter++;
//     guessedNumber = prompt("Wrong!!! Try again!");
//     if (guessedNumber === randomNumber && counter <= 3) {
//         counter++;
//         console.log(wonGameMessage);
//     } else if (guessedNumber !== randomNumber && counter < 3) {
//         counter++;
//         guessedNumber = prompt("Wrong!!! Try again!");
//     } else if (guessedNumber !== randomNumber && counter === 3) {
//         counter = 0;
//         console.lost(lostGameMessage);
//     }
// }



