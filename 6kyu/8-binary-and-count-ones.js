/*
given a number input 
find the binary representation
in the binary representation count the number of 1's
*/

function binaryOnes(number) {
    let countt = 0;
    number = number.toString(2);
    for (let i = 0; i < number.length; i++) {
        if (number[i] === '1') {
            countt++;
        }
    }
    return countt;
}
console.log(binaryOnes(1234))

/*
qita daan

countBits = n => n.toString(2).split('0').join('').length;
*/
