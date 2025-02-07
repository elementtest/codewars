/*
narcissistic number is a number that is split up and then raised to the power of the number of digits 
given input of a number output whether true or false regarding that number being a narcisistic number or not
*/

function narcissistic(value) {

let newVal = value.toString().split('').map(num => {return Number(num) ** (value.toString().length)}).reduce((accu, finnum) => {
    return accu + finnum;
}, 0) 
    return newVal === value ? true : false;

}

console.log(narcissistic(153));
