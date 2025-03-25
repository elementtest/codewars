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
    let newArr = [];
    r = n.toString().split('');
    for (let i = 0; i < r.length; i++) {
        newArr.push(Math.pow(Number(r[i]), p+i));
    }

    let sum = newArr.reduce((accu, curr) => accu + curr, 0);

    return sum % n === 0 ? sum : -1;

}

console.log(digPow(46288, 3));

/*
function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)

    return x % n ? -1 : x / n
}
*/
