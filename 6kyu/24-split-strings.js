/*
given a string, break down the string into pairs of characters 
i.e.
abcdefghij
'ab','cd','ef','gh','ij'
if there is an odd amount of characters add a _ underscore at the end

    */
function solution(str) {
    if (typeof str !== 'string') return [];

    if (str.length % 2 !== 0) {
        str += "_";
    }

    return str.match(/.{2}/g) || [];
}

console.log(solution('abdsdfsdf'));
/*
since match will only match two of any character, we just add a _ on the end... 
why? 
because when we return it, the underscore will be ommited if it's odd because it's only matching pairs
*/
