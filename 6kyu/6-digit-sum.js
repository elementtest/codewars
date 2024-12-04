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
let n = 16;
function digitalRoot(n) {
    while (n >= 10) {
    n = n.toString().split('').reduce((accu, numm) => accu + Number(numm), 0);
    }
    return n;
}


console.log(digitalRoot(n));
/* 
SOLUTION:  
function digital_root(n) {
return (n -1) % 9 + 1;
}

notes::
i was missing while.... repeatedly execute a block of code as long as a specified condition is true.  
n equals n to string no quotes... puts it in a string... split with quotes breaks up each individual space and puts it in an array for reduce.  reduce params accumulator and the number itself arrow function (not done yet) Number(numm), 0 start from zero...... will continue looping until n is less than or not equal to ten.  put the return n OUTSIDE of the while loop... 

*/
