/*
each letter scores points according to position in the alphabet
i.e.
a = 1, b = 2, c = 3 etc

for example the score of abad is 8 (1 + 2 + 1 + 4) 

you need to return the highest scoring word as a string

if two words score the same, return the word that appears earliest in the original string

all letters will be lowercase and all inputs will be valid


TLDR: 

input : string of letters
output : score based on 1 = a and 26 = z
*/

let string = 'abcdefghijklmnopqrstuvwxyz';

function high(x) {
    let summ = 0;
    for (let i = 0; i < x.length; i++) {
        summ += ((x[i].charCodeAt(0)) - 96);
    }
    return typeof summ;

}


console.log(high(string))
