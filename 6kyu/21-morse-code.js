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

let morseCode = '.... . -.--   .--- ..- -.. .';

//console.log(MorseDict[morseCode]);

decodeMorse = function(morseCode) {
    morseCode = morseCode.trim().split('   ');
    for (let i = 0; i < morseCode.length; i++) {
        for (let j = 0; j < morseCode.length; j++) {
            console.log(morseCode[j]);
        }

    }
    //for (let i = 0; i < morseCode.length; i++) {
    //    console.log(MorseDict[morseCode[i]]);
    //}
}

console.log(decodeMorse(morseCode));


