/*
take in string
split string into pairs of 2
if string.length is an odd number:
then final pair's missing second character: 
place an underscore _
*/

function solution(str) {
    return str.split(/.{1,2}/g);
}

console.log(solution('abcdefghij'));

/*
problem... the split() method is looking at the string then 
deleting the delimiter (fancy name to say what you are searching for to split something)
then spliting the string based on the position of the delimiter
so the problem you were having is you were saying str.split(/\w{2}/) which is correct
the problem is it is deleting every two characters in the string... leaving you with nothing 
but empty strings as a result
*/
