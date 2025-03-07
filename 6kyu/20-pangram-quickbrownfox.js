/*
given a sentence return true if it contains every single letter of the alphabet at least once
*/

function isPangram(string) {
    string = string.toLowerCase();
    let regxx = /[a-z]/g;
    return string.match(regxx).length === 26 ? true : false;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
