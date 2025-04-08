/*
take in string
split string into pairs of 2
if string.length is an odd number:
then final pair's missing second character: 
place an underscore _
*/

function solution(str) {
    return str.split(/.{2,}/);
}

console.log(solution('abcdefghij'));
