/*
input: array of increasing letters from a
output: missing letter in the array
i.e. 
['a', 'b', 'c', 'e']
output 'd'
also this is case sensitive... so 
i.e. 
['D', 'E', 'F', 'H']
output 'G'
*/

function findMissingLetter(array) {
    let missingNo = '';
    for (let i = 1; i < array.length; i++) {
        let firstt = (array[i].charCodeAt(0));
        let secondd = (array[i-1].charCodeAt(0));

        if (firstt - secondd !== 1) {
            missingNo = (firstt -1);
        }
        
    }

    console.log('final return');
    return String.fromCharCode(missingNo);
}

//console.log(findMissingLetter(['a','b','c','e']));

console.log(findMissingLetter(['E','F','G','I']));
