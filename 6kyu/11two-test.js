let str = 'bookkeeper';

let regex = /(.)(?=.*\1)/g;

let newStr = str.replace(regex, '*');

console.log(newStr);
