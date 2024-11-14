/*
1. take in a string
    if 5 or more letters
    then reverse
2. only consist of letters and spaces
3.  spaces included only when more than one word is present
*/
let string = "Just kidding there is still one more";
function spinWords(string) {
    let spp = string.split(" ");
    for (let i = 0; i<spp.length; i++) {
        if (spp[i].length >= 5) {
            spp[i] = spp[i].split("").reverse().join("");
        }
        }
    return spp.join(" ");

        }
console.log(spinWords(string));

/*

*/
