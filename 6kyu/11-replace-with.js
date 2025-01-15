let str = "book";

str = str.toLowerCase().split('');

let same = [];

for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
            same.push(str[i]);
        }
    }
}
same = [...new Set(same)];

const newArr = str.map(letter => same.includes(letter) ? ')' : '(').join('');

console.log(newArr);

/*
other solution: 
function duplicateEncode(word) {
return word
.toLowerCase()
.split('')
.map( function (a, i, w) {
    return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
})
.join('');
}
*/
