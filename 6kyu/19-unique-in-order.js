/*
given a sequence of letters such as: 
AAAABBBBBCCDDDDDAAABBBBB
return
ABCDAB
a
*/
function uniqueInOrder(iterable) {
    let strr = Array.isArray(iterable) ? iterable : iterable.split('');
    return strr.map((elm, idx, array) => {
        if (array[idx] !== array[idx+1]) {
            return array[idx];
        }
    }).filter(fuzz => fuzz !== undefined);

}

console.log(uniqueInOrder([1,1,1,2,2,2,23,3,3,3]));

/*
var uniqueInOrder = function(iterable) {
    return [...iterable].filter((a,i) => a !== iterable[i-1])
}
*/
