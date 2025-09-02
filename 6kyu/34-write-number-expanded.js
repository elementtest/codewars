/*
input: number
output: return it in a string as expanded form... 

write a for loop... for length of the the number... then add how many zeros.... 



*/

function expandedForm(num) {
    num = num.toString();
    let arr = [];
    let numm = 0;
    for (let i = num.length-1; i >= 0; i--) {
        if (num[numm] === '0') {
            numm++;
            continue;
        }
        arr.push(num[numm] + '0'.repeat(i));
        numm++;
    }
    return arr.join(' + ');

}


console.log(expandedForm(70304));
