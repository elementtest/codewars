// took a previous if else statement and made a ternary operator
// if the number is even do this other wise do this
function simpleMultiplication() {
let number = Math.floor(Math.random() * 100) + 1;
    console.log(`the number is ${number}`);
return (number % 2 === 0) ? (number *= 2) : (number *= 1);
}

console.log(simpleMultiplication());
