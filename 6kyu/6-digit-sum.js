/*
Description:

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/
let n = 942;
function digitalRoot(n) {
    n = n.toString();
    n = Array.from(n, Number);
    let countt = 0;

    for (let i = 0; i < n.length; i++) {
        countt += n[i];
    } 
        
    return countt;


console.log(digitalRoot(n));
/*
do not put the return statement in the for loop because on the first round it will immediately exit
*/
