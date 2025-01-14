let str = "(( @";

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

const newArr = str.map(letter => same.includes(letter) ? ')' : '(');

console.log(typeof(same));



console.log(newArr.join(''));
