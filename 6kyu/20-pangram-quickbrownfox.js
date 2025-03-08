/*
given a sentence return true if it contains every single letter of the alphabet at least once

maybe try and use match to see... look into match more.... 
*/

function isPangram(string) {
    let array = [];
    string = string.toLowerCase().replace(/\s+/g, '');
    for (let i = 0; i < string.length; i++) {
        array.push(string.charCodeAt(i));
    }
    return ([...new Set(array)].reduce((accu, curr) => {
        return accu + curr;
    }, 0) === 2847) ? true : false;
}

console.log(isPangram('This is not a pangram.'));
