const number = 5;
for (let index = 1; index <= 3; index++) {
    const element = index;
    let guess = prompt("Guess a number between 1-10");

    if (guess == number) {
        alert(
            `Sucess the number was ${number} ! and you did it in ${element} attempts.`
        );
        break
    } else {
        alert(`Wrong!!! Try Again!`);
    }
    if (guess !== number && element === 3) {
        alert(
            `Sorry you failed to guess the number in three attempts. The number was ${number}`
        );
    }
};