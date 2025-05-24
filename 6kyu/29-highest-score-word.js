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

let input = 'the quick brown fox jumped over the lazy dog';

function high(x) {
    let maxScore = 0;
    let maxWord = '';
    let words = x.split(' ');

    for (let i = 0; i < words.length; i++) {
        let wordScore = 0;
        for (let j = 0; j < words[i].length; j++) {
            wordScore += words[i].charCodeAt(j) - 96;
        }

        if (wordScore > maxScore) {
            maxScore = wordScore;
            maxWord = words[i];
        }
    }
    return maxWord + maxScore;
}

console.log(high(input));
