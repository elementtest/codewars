/*
given a string return its position in the alphabet i.e. a = 1 b = 2 etc 
*/

let text = "The narwhal bacons at midnight.";
function alphabetPosition(text) {
    text = text.toLowerCase();
    let regexx = /^[a-z]$/;
    let newArr = [];
    console.log(text);
    for (let i = 0; i < text.length; i++) {
        if (regexx.test(text[i])) {
            newArr.push((text.charCodeAt(i) - 96));
        }
    }

    return newArr.join(' ');
}

console.log(alphabetPosition(text))

/*
error i was having was that i was not giving it the proper output.  again i assumed. 
assumption is the mother of all error.  the code was exactly write it just wasnt the right type of data
*/

/*
function alphabetPosition(text) {
var result = "";
for (var i = 0; i < text.length; i++) {
    var code = text.toupperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code -64) + " ";
}

    return result.slice(0, result.length-1);
}

clever... considering that charCodeAt gives you the unicode value just look at it and select it.  
DO NOT NEED THE REGEX
*/
