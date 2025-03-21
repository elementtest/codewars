/*
break the number n into digits
for n = 8 the digits are 8 and 9
raise each digit to a power starting at p and increasing by 1 for each digit.  
8 raised to the power of 1 is 8
9 raised to the power of 2 is 9 * 9 so that is 81
the sum of these results is 8 + 81 = 89
you want to find a number k such that this sum equals n * k
n * k = 89
*/

function digPow(n, p) {
    let initt = 0;
    n = n.toString().split('');
    for (let i = 0; i < n.length; i++) {

    }
}

console.log(digPow(89));


