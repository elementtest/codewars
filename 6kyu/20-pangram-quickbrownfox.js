/*
given a sentence return true if it contains every single letter of the alphabet at least once
*/

function isPangram(string) {
    string = string.toLowerCase();
    let regxx = /[a-z]/;
    return string.match(regxx) ? true : false;
}

console.log(isPangram('SDJFKLSDJFKLDFKJ'));
