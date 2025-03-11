/*
Given a sentence return true if it contains every single letter of the alphabet at least once

maybe try and use match to see... look into match more.... 
*/

function isPangram(string) {
    string = string.toLowerCase().replace(/[^a-z]/g, '')

    let arr = (new Set([...string]).size === 26) ? true : false;
    return arr;


}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
/*
take a string and convert it to lowercase... then replace all the non abcdefg characters with nothing... 
make a new variable... turn the string into a Set which is a unique Set of values think a Set of cards... you have to use the spread operator on the it to turn the string into an array.  length also does not work 
for Sets so you have to do size and you can check to see if its true or false with the tertiary operator
*/
