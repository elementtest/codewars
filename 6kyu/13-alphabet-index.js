/*
given a string return its position in the alphabet i.e. a = 1 b = 2 etc 
*/

let text = 'book';
function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newArr = [];
    for (let i = 0; i < text.length; i++) {
        newArr.push((alphabet.indexOf(text[i])+1));
        
    }
    return newArr;

}

console.log(alphabetPosition(text))

