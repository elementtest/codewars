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
        console.log('current one');
        let firstt = (array[i].charCodeAt(0));
        console.log('one before it');
        let secondd = (array[i-1].charCodeAt(0));
        console.log('ok here is the subtraction');

        if (firstt - secondd !== 1) {

            console.log('found the bad one');
            missingNo = (firstt -1);

            console.log('the missing number is');

            console.log(missingNo);

            console.log(firstt);

            console.log(array[i]);
        }

        
    }

    console.log('final return');
    return String.fromCharCode(missingNo);
    
    console.log('what is the first one');
    console.log(array[0]);
}

//console.log(findMissingLetter(['a','b','c','e']));

console.log(findMissingLetter(['E','F','G','I']));
