/*
given a sequence of letters such as: 
AAAABBBBBCCDDDDDAAABBBBB
return
ABCDAB
a
*/
function uniqueInOrder(iterable) {
    return iterable.split('').map((elm, idx, array) => {
        if (array[idx] !== array[idx+1]) {
            return array[idx];
        }
    }).filter(fuzz => fuzz !== undefined);
}

console.log(uniqueInOrder('AAAABBBBCCCDDDAAABBBB'))
