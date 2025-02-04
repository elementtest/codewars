/*
write a function persistence, that takes in a positive parameter num and returns its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit

example input output
39 ==> 3 because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 only has one digit there are 3 multiplications
999 ==> 4 because 9*9*9 = 729, 7*2*9 = 126, 1 * 2 * 6 = 12, and finally 1* 2 = 2

take the number and split it into an array... take array and multiply numbers together... if numbers are greater than 10 then repeat
*/

function persistence(num) {

    let countt = 0;
    while (num >= 10) {
        countt++
        num = num.toString().split('').reduce((accu, curr) => {
            return accu * curr;
        }, 1)
        }
    return countt;
    }


console.log(persistence(4));


