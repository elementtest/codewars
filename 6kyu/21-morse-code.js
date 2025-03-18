/*
Given an input of morse code, output the message in English it would produce.  

first time using a predefinited object dictionary named MORSE_CODE

DETAILS:  
a single space is used to seperate the character codes

3 spaces are used to seperate the words 

extra spaces before or after the code have no meaning and should be ignored
*/

const MorseDict = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  
  "...---...": "SOS",  // Special code for SOS
  
  ".-.-.-": ".",  // Period
  "--..--": ",",  // Comma
  "..--..": "?",  // Question mark
  "-....-": "-",  // Dash
  ".----.": "'",  // Apostrophe
  "-.-.--": "!",  // Exclamation mark
  "-..-.": "/",  // Slash
  ".-..-.": "\"", // Double quote
  ".--.-.": "@",  // At sign (@)
};

//let morseCode = '.... . -.--   .--- ..- -.. .';

let morseCode = '.... . .-.. .-.. ---   .-- --- .-. .-.. -..   - .... .. ...   .. ...   .-   - . ... -';
// morse code for HELLO WORLD THIS IS A TEST





//console.log(MorseDict[morseCode]);

decodeMorse = function(morseCode) {
    let arr = [];
    let countter = 0;
    morseCode = morseCode.trim().split('   ');
    for (let i = 0; i < morseCode.length; i++) {
        if (countter > 0 ) {
            arr.push(' ')
        }
        let morseSecond = morseCode[i].split(' ');
        for (let j = 0; j < morseSecond.length; j++) {
            countter++;
            //console.log(MorseDict[morseSecond[j]]);
            arr.push(MorseDict[morseSecond[j]]);
            //console.log(MorseDict[morseSecond[j]]);
        }

    }
    //return arr.join('');
    return '"' + arr.join('') + '"';

}

console.log(decodeMorse(morseCode));


