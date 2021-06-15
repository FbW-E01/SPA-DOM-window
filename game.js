let number = prompt("Guess a from 1-10")
let x = Math.floor(Math.random() * 10)
let i = 1;

while (x != number && i < 3) {
    i++;
    number = prompt("Nope, sorry the number was " + x + " ! Try again!")

}

if (x == number) {
    alert("Success, the number was  , " + x + ",! Attempts:" + i + "")

}
else if (i == 3) {
    alert("Sorry, you failed to guess the number in three attempts. The number was 0!")
}





