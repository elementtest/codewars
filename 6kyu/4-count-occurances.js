/*
given an array count the amount of occurences of each given number
find the number (Only one) that occurs an odd amount of times

*/
function findOdd(A) {
    let minn = Math.min(...A);
    let maxx = Math.max(...A);
    for (let i = 0; i <= A[i]; i++) {
        for (let j = minn; j<= maxx; j++) {
           let filtered = A.filter(boo => boo === j)
            if (!(filtered.length % 2 === 0)) {
                return j;
            }
        }
    }

}
findOdd([0,1,1,1,2,3,4]);
console.log(findOdd([0,0,1,1,1,2,2,3,3,4,4]));
/*
GOD SOLUTION 
const findOdd = (xs) => xs.reduce((a,b) => a ^ b);
*/
