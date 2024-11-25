/*
given two arrays of numbers
find commonalities of both
remove all occurances of commonalities
*/
let nOne = [1,1,3,4,5];
let nTwo = [6,3,8,3,1,1];
function killComm(nOne, nTwo) {
    for (let i = 0; i <= nOne.length; i++) {
        console.log(nOne[i]);
        for (let j = 0; j <= nTwo.length; j++) {
            console.log(nTwo[j]);
        }
    }
}

console.log(killComm(nOne, nTwo));

