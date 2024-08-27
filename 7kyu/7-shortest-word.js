// given a string of words return the length of the shortest word
let s = "Mine Bitcoin 21inc Factom Steem Lisk Dash Mine Steem ProofOfWork MadeSafeCoin";
function findShort(s) {
    s = s.split(" ")
    let arrr = [];
    for (let i = 0; i < s.length; i++) {
        arrr.push(s[i].length)
    }
    let minn = Math.min(...arrr); 
    const indexx = arrr.indexOf(minn);
    let  finalReturn = s.slice(indexx, indexx + 1) 
    finalReturn = finalReturn.join('')

    return finalReturn.length;

}
/*
split the string into an array
declare a new array for the word lengths
iterate through the array and push(add) all the lengths of the words to the new array
execute Math.min function using the ... usage on the new array to go through each one individually
get the index of the shortest word using indexOf method 
use slice to take that index and slice it out using the first value inclusive and the second 
value of slice (exclusive) not included
have to join it back into a string for the length property to work
the codewars challenge wants the length
    */

console.log(findShort(s));
