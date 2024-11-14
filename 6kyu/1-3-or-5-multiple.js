let number = 60;
function solution(number) {
    if (Math.sign(number) === -1) {
        return 0;
    } else {
    let arr = [];
    for (i=3; i<number; i+=3) {
        arr.push(i)
    }
    for (i=5; i<number; i+=5) {
        arr.push(i)
    }
    let uniArr = [...new Set(arr)];
    console.log(uniArr);
    console.log(uniArr.reduce((acc, num) => acc + num, 0));
    }
}
console.log(solution(number))

/*
error... i was using i + 3... that does not update i resulting in infinite loop
have to use i+=3... then i will be updated
*/

/*
lets start at the beginning .. the Math.sign method helps return if a number is positive negave or 0

Math.sign(number) posssible outcomes:::: 
1-> number is positive
-1 > number is negative
0 > the number is 0

*/

/*
GOD SOLUTION: 
function solution(number) {
var sum = 0;

for (var i = 1; i< number; i++) {
if (i % 3 == 0 || i % 5 == 0) {
sum+= i
}
}
return sum;
}
*/
