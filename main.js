function guessRandomNum() {
    let count = 1;
    const randomNum = Math.ceil(Math.random() * 10);
    let inputNum = prompt("Guess a number between 1 - 10:");

    //..
    while (randomNum != inputNum && count < 3) {
        inputNum = prompt(`Wrong!!! Try Again!`);
        count++;
    }
    // ..

    if (randomNum == inputNum) {
        alert(`Success, the number was ${inputNum} Attempt: ${count}`);
    } else if (count == 3) {
        alert(
            `Sorry, you failed to guess the number in three attempts. The number was ${inputNum}!`
        );
    }
}
