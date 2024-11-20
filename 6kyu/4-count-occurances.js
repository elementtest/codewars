/*
given an array count the amount of occurences of each given number
find the number (Only one) that occurs an odd amount of times

*/
function findOdd(A) {
    let minn = Math.min(...A);
    let maxx = Math.max(...A);
    for (let i = 0; i < A.length; i++) {
        for (let j = minn; j <= maxx; j++) {
            if (A[i] === j) {
                let countt = 0;
                countt++;
                console.log(countt);
            }
        }
    }
}
findOdd([0,1,1,1,2,3,4]);
