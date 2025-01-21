/*
given a string return its position in the alphabet i.e. a = 1 b = 2 etc 
*/

let text = '111111000000abcdefghiJkliM111111110000nopqrstuvwxyz';
function alphabetPosition(text) {
    text = text.toLowerCase();
    let regexx = /^[a-z]$/;
    console.log(text);
    for (let i = 0; i < text.length; i++) {
        if (regexx.test(text[i])) {
        console.log(text.charCodeAt(i)); }
    }

}

console.log(alphabetPosition(text))

