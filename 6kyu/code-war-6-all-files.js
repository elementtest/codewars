===== 10-count-number-of-repeating-letters.js =====
/*
count the number of repeating letters in a string
*/
let str = 'aabbcde';
function countRepeat(str) {
    str = str.toLowerCase().split('').sort();
    console.log(str);
    let initt = str[0];
    let countt = 0;
    let timm = 0;
    for (let i = 1; i < str.length; i++) {
        if (initt === str[i]) {
            if (timm === 0) {
                countt++;
                timm++;
            }
            
        } else {
            initt = str[i];
            if (timm === 1) {
                timm--;
            }
        }
        }
    return countt;
    
        }


console.log(countRepeat(str));
/*
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
*/


===== 11-replace-with.js =====
let str = "book";

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

const newArr = str.map(letter => same.includes(letter) ? ')' : '(').join('');

console.log(newArr);

/*
other solution: 
function duplicateEncode(word) {
return word
.toLowerCase()
.split('')
.map( function (a, i, w) {
    return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
})
.join('');
}
*/


===== 12-north-south-east-west.js =====
/*
given an array of cardinal directions north, south, east, west... decide first whether it takes exactly ten minutes to complete and second if it returns you to the start point.
*/

let walk = ['e','w','e','w','s','n', 's', 'n', 's', 'n'];
function isValidWalk(walk) {
    let measure = 0;
    let minutes = 0;

    for (let i = 0; i < walk.length; i++) {
        console.log(walk[i]);
        switch (walk[i]) {
            case 'n': 
                measure += 1;
                minutes += 1;
                break;
            case 's': 
                measure -= 1;
                minutes += 1;
                break;
            case 'e':
                measure += 0.5;
                minutes += 1;
                break;
            case 'w':
                measure -= 0.5;
                minutes += 1;
                break;
            default: 
                console.log('not a proper direction');
        }
    }
    console.log(measure);
    console.log(minutes);
    return (measure === 0 && minutes === 10) ? true : false;
}

console.log(isValidWalk(walk));



===== 13-alphabet-index.js =====
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


===== 1-3-or-5-multiple.js =====
let number = 60;
function solution(number) {
    if (Math.sign(number) === -1) {
        return 0;
    } else {
    let arr = [];
    for (i=3; i<number; i+=3) {
        arr.push(i)
    }
    for (i=5; i<number; i+=5) {
        arr.push(i)
    }
    let uniArr = [...new Set(arr)];
    console.log(uniArr);
    console.log(uniArr.reduce((acc, num) => acc + num, 0));
    }
}
console.log(solution(number))

/*
error... i was using i + 3... that does not update i resulting in infinite loop
have to use i+=3... then i will be updated
*/

/*
lets start at the beginning .. the Math.sign method helps return if a number is positive negave or 0

Math.sign(number) posssible outcomes:::: 
1-> number is positive
-1 > number is negative
0 > the number is 0

*/

/*
GOD SOLUTION: 
function solution(number) {
var sum = 0;

for (var i = 1; i< number; i++) {
if (i % 3 == 0 || i % 5 == 0) {
sum+= i
}
}
return sum;
}
*/


===== 14-persistent-bugger.js =====
/*
write a function persistence, that takes in a positive parameter num and returns its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit

example input output
39 ==> 3 because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 only has one digit there are 3 multiplications
999 ==> 4 because 9*9*9 = 729, 7*2*9 = 126, 1 * 2 * 6 = 12, and finally 1* 2 = 2

take the number and split it into an array... take array and multiply numbers together... if numbers are greater than 10 then repeat
*/

function persistence(num) {

    let countt = 0;
    while (num >= 10) {
        countt++
        num = num.toString().split('').reduce((accu, curr) => {
            return accu * curr;
        }, 1)
        }
    return countt;
    }


console.log(persistence(4));




===== 15-camelCase.js =====
/*
given a string turn it into camelCase
i.e.
the-golden-warrior
--->
theGoldenWarrior
*/

function toCamelCase(str) {
    let resultt = str.split(/[-_]/);

    resultt = resultt.map((word, idx) => {
        if (idx !== 0) {
            return word[0].toUpperCase() + word.slice(1);
        }
        return word;
    })
    return resultt.join('');
}

console.log(toCamelCase('the_stealth_warrior'));


===== 16-narcisistic-number.js =====
/*
narcissistic number is a number that is split up and then raised to the power of the number of digits 
given input of a number output whether true or false regarding that number being a narcisistic number or not
*/

function narcissistic(value) {

let newVal = value.toString().split('').map(num => {return Number(num) ** (value.toString().length)}).reduce((accu, finnum) => {
    return accu + finnum;
}, 0) 
    return newVal === value ? true : false;

}

console.log(narcissistic(153));

/*
function narcissistic ( value ) {
return ('', + value).split('')
}
*/


===== 17-order-strings-with-numbers.js =====
/*
given a string with a number in it your task is to order the string with the number in it properly 

i.e. 
test4 is2 this1 a3
becomes 
this is a test( with the numbers included in the string)
*/


function order(words) {
    const regX = /\d/;

    words = words.split(' ');

    let result = words.sort((a,b) => {
        const numA = a.match(regX);
        const numB = b.match(regX);

        return numA - numB;
    })
    return result.join(' ');
}
console.log(order("is2 Thi1s T4est 3a" ));


===== 18-tribonnaci-sequence.js =====
/*
goal is to given an array to take the past three numbers and then to add them together to create the 
next number in the array
i.e. 
1,1,1,3,5
you need to create a tribonacci function that given a signature array/list, returns the 
first n elements - signature included of the so needed sequence
*/


function tribonaci(signature, n) {
    let countt = 2;
    if (n == 0) {
        return [];
    } else if (n == 1) {
        return signature[0];
    } else {
    while (signature.length < n) {
        let numm = 0;
        numm += signature[countt];
        numm += signature[countt-1];
        numm += signature[countt-2];
        signature.push(numm);
        countt++;
        }
        return signature;
    }
}

console.log(tribonaci([1,1,1], 1));
/*
learned a lot with this one

function trib(sig, n) {
for (var i = 0; i < n-3; i++) {
sig.push(sig[i] + sig[i+1] + sig[i+2])
}
return sig.slice(0,n);
}
*/

/*
another possible issue... is that the problem is not necessarily looking to return the array
although my code passed it is not the most optimal

the most optimal is to use slice to return how many elements

return sig.slice(0,n)

because some edge cases would only want you to return one value if n is 1;

*/


===== 19-unique-in-order.js =====
/*
given a sequence of letters such as: 
AAAABBBBBCCDDDDDAAABBBBB
return
ABCDAB
a
*/
function uniqueInOrder(iterable) {
    let strr = Array.isArray(iterable) ? iterable : iterable.split('');
    return strr.map((elm, idx, array) => {
        if (array[idx] !== array[idx+1]) {
            return array[idx];
        }
    }).filter(fuzz => fuzz !== undefined);

}

console.log(uniqueInOrder([1,1,1,2,2,2,23,3,3,3]));

/*
var uniqueInOrder = function(iterable) {
    return [...iterable].filter((a,i) => a !== iterable[i-1])
}
*/


===== 20-pangram-quickbrownfox.js =====
/* .
Given a sentence return true if it contains every single letter of the alphabet at least once

maybe try and use match to see... look into match more.... 
*/

function isPangram(string) {
    string = string.toLowerCase().replace(/[^a-z]/g, '')

    let arr = (new Set([...string]).size === 26) ? true : false;
    return arr;


}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
/*
take a string and convert it to lowercase... then replace all the non abcdefg characters with nothing... 
make a new variable... turn the string into a Set which is a unique Set of values think a Set of cards... you have to use the spread operator on the it to turn the string into an array.  length also does not work 
for Sets so you have to do size and you can check to see if its true or false with the tertiary operator
*/


===== 21-extra-morse.js =====
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
console.log(
decodeMorse = function(morseCode) {
    return morseCode
        .trim()
        .split(/  | /)
        .map( (code) => MorseDict[code] || ' ')
        .join('');
}
)


===== 21-morse-code.js =====
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


/*
POSSIBLE SOLUTIONS


*/


===== 22-squared-math.js =====
/*
break the number n into digits
for n = 8 the digits are 8 and 9
raise each digit to a power starting at p and increasing by 1 for each digit.  
8 raised to the power of 1 is 8
9 raised to the power of 2 is 9 * 9 so that is 81
the sum of these results is 8 + 81 = 89
you want to find a number k such that this sum equals n * k
n * k = 89
*/

function digPow(n, p) {
    let newArr = [];
    r = n.toString().split('');
    for (let i = 0; i < r.length; i++) {
        newArr.push(Math.pow(Number(r[i]), p+i));
    }

    let sum = newArr.reduce((accu, curr) => accu + curr, 0);

    return sum % n === 0 ? sum : -1;

}

console.log(digPow(46288, 3));

/*
function digPow(n, p) {
    var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)

    return x % n ? -1 : x / n
}
*/


===== 23-left-and-right-equal.js =====
/*
find the index position N in an array where the sum of all the integers on the right side of it.  and the sum of all the integers to the left side of it are equal to one another.  if this does not exist then return -1 
*/

function findEvenIndex(arr) {
    let summ = arr.reduce((a,b) => a + b, 0);
    let left = 0;
    for (let i = 0; i < arr.length; i++) {
        let right = summ - left - arr[i];
        if (right === left) {
            return i;
        }
        left += arr[i];
    }
    return -1;

}

console.log(findEvenIndex([1,2,3,4,3,2,1]));


/*
manually explain what needs to happen:
go through each number
start with first number
sum numbers to left of it (zero)
sum numbers to the right of it (?)
if left sum is equal to the right 
then: return the number (n)
if no number where this exists: 
return -1
*/




===== 24-split-strings.js =====
/*
given a string, break down the string into pairs of characters 
i.e.
abcdefghij
'ab','cd','ef','gh','ij'
if there is an odd amount of characters add a _ underscore at the end

    */
function solution(str) {
    if (typeof str !== 'string') return [];

    if (str.length % 2 !== 0) {
        str += "_";
    }

    return str.match(/.{2}/g) || [];
}

console.log(solution('abdsdfsdf'));
/*
since match will only match two of any character, we just add a _ on the end... 
why? 
because when we return it, the underscore will be ommited if it's odd because it's only matching pairs
*/


===== 25-find-unique-num.js =====
/*
there is an array with some numbers.  All numbers are equal except for one.  Try to find it.   
it is guaranteed that array contains at least 3 numbers 
the tests contain some very huge arrays. so think about performance.  
*/

function findUniq(arr) {
    if ((arr[0] !== arr[1]) && (arr[0] !== arr[2])) {
        return arr[0];
    } else {
        for (let i =1; i < arr.length; i++) {
            //console.log(arr[i]);
            //console.log(arr[i-1]);
            //console.log('k');
            if (arr[i] !== arr[i-1]) {
                return arr[i]
            }
        }
    }


    }

console.log(findUniq([1,1,1,0,1,1,1,1,1]));

/*
function findUniq(arr) {
arr.sort((a,b)=>a-b);
return arr[0]==arr[1]?arr.pop():arr[0]
}
*/


===== 26-sort-the-odd.js =====
/*
you will be given an array of numbers.  you have to sort the odd
numbers in ascending order while leaving the even numbers at their original positions.  
so have to determine if it's even first can use % 2 to determine it.  
second thing is the odd numbers could use something like sort... 
but how do we keep the order?  maybe two loops.  can have a check on each of the numbers that sounds like the best way to do it. 
first loop goes through the array. second loop executes on each element
in the array.  deletes the even numbers so if number % 2 is zero then 
dont add but if not then add to new array.  new array.  sort... smallest to biggest.. 
*/

function sortArray(array) {
    let oddArr = [];
    for (let a = 0; a < array.length; a++) {
        if (array[a] % 2 !== 0) {
            oddArr.push(array[a]);
        }
    }
    oddArr = oddArr.sort((a,b) => a - b);

    let totalArr = array.map(num => {
        if (num % 2 !== 0) {
            return oddArr.shift();
        } else {
            return num;
        }
    })
    
    //console.log(oddArr);
    return totalArr;

}

console.log(sortArray([5,3,2,8,1,4]));


/*
function sortArray(array) {
const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
return array.map((x) => x % 2 ? odd.shift() : x);
}
*/


===== 27-find-missing-letter.js =====
/*
input: array of increasing letters from a
output: missing letter in the array
i.e. 
['a', 'b', 'c', 'e']
output 'd'
also this is case sensitive... so 
i.e. 
['D', 'E', 'F', 'H']
output 'G'
*/

function findMissingLetter(array) {
    let missingNo = '';
    for (let i = 1; i < array.length; i++) {
        let firstt = (array[i].charCodeAt(0));
        let secondd = (array[i-1].charCodeAt(0));

        if (firstt - secondd !== 1) {
            missingNo = (firstt -1);
        }
        
    }

    console.log('final return');
    return String.fromCharCode(missingNo);
}

//console.log(findMissingLetter(['a','b','c','e']));

console.log(findMissingLetter(['E','F','G','I']));


===== 28-build-tower.js =====
/*
input: number of floors
output: asterisk
(surrounded by equal amount of whitespace on each side.)

['     *     '] // hit space bar five times
['    ***    '] // hit space bar four times
['   *****   '] // hit space bar three times
['  *******  '] // hit space bar twice
[' ********* '] // hit space bar once
['***********'] // hit space bar zero times

*/

function towerBuilder(nFloors) {
    let spacee = 5;
    let astr = 1;
    let arr = [];
    for (let i = 0; i < nFloors; i++) {
        arr.push(('"' + " ".repeat(spacee)) + ("*".repeat(astr)) + (" ".repeat(spacee)) + '"') 
        spacee -= 1;
        astr += 2;
    }
    return arr.join(",\n");

}


console.log(towerBuilder(6));

/*
what's the relationship from top and with each successive floor number?  
1st floor: 1... 2nd floor: 3.... 3rd floor: 5 .... 4th floor: 7 ... 5th floor: 9... 

so starts at one and then adds 2 every time 
*/


===== 29-further.js =====
function high(s) {
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96, 0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}
console.log(high('the quick brown fox zzzzz'));


===== 29-word-scores.js =====
function high(x) {
    let highScore = 0;
    let stringg = x.split(' ')
    let maxWord = '';
    for (let i = 0; i < stringg.length; i++) {
        let thisWord = 0;
        for (let j = 0; j < stringg[i].length; j++) {
            thisWord += (stringg[i].charCodeAt(j) - 96);
        }
        if (thisWord > highScore) {
            highScore = thisWord;
            maxWord = stringg[i];
        }
    }
    console.log(typeof(maxWord));

    return (`the highest score is ${highScore} with word ${maxWord}`);

}


console.log(high('the quick brown fox jumps over the lazy zzzzzzzzzzz'));


===== 2-reverse-letters.js =====
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


===== 30-delete-occurances.js =====
/*
input: numbers

output:  given N only allow N number of repeats.  do not change the order of the numbers

i.e.
N is 2
[1,2,3,1,2,1,2,3]
becomes: 
[1,2,3,1,2,3]

N is 1
[20,37,20,21]
becomes: 
[20,37,21]
*/

function deleteNth(arr,n) {
    let obj = {};
    let res = [];

    for (let num of arr) {
        if (!(obj[num])) {
            obj[num] = 0;
        }

        if (obj[num] < n) {
            res.push(num);
            obj[num]++;
        }
    }
    return res;

}


console.log(deleteNth([1,1,1,1,1,2,2,2,2,2,23,3,33,3,3,4,66,9], 2))

/*
what i learned:  

use let whatever of array to loop over objects

you can check if something exists or not in an object by using an if statement and then this 

key[value]

ALL javascript values MUST HAVE KEYS....

if the value is less then n... push the number to the results array
add a counter to the value of the object in the obj object

so what is happening... you iterate through an array stating a num to represent each element in the array

at the same time you can use that element to check an object... so i.e. if the current number being

iterated over is 3 in the array then it will also check if a value exists at 3 in the obj object


*/



===== 30-solution.js =====
function deleteNth(arr,x) { 
    var cache = {};
    return arr.filter(function(n) {
        cache[n] = (cache[n]|0) + 1;
        return cache[n] <= x;
    });
}


console.log(deleteNth([1,1,1,1,1,2,2,2,22,3,3,3,5,5,5,7],2))


===== 31-count-the-smiley-faces.js =====
/*
given an array output how many smiley faces there are in said array
*/

//let arr = [':);):-):~);~);~):D;D:-D:~D;-D;~D'];
let arr = ['sdjfklsdjfkldsjkflsjfsdlkjf'];
function countSmileys(arr) {

    const regX = /[;:][-~]?[)D]/g;

    let result = arr.join().match(regX);

    if (result === null){
        result = 0;
    }

    if (result.length > 0) {
        return result.length;
    } else {
        return 0;
    }

}


console.log(countSmileys(arr));


===== 32-break-camelcase.js =====
/*
given camelcase word break it up..
i.e. camelCase => camel Case
*/


function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ');
}


console.log(solution('camelCase'));




===== 33-build-a-pile-of-cubes.js =====
/*
task.. given a total volume of m... find the number of n to fill the volume... 
n is in a pyramid structure.  i.e. top is 1 * 1 * 1 floor under is 2 * 2 * 2.... 
third floor down is 3 * 3 * 3 ... etc all the way until you fill m
*/

function findNb(m) {
    let check = 0;
    for (let n = 1; check < m; n++) {
        check += (Math.pow(n,3));
        console.log(check);
        if (check === m) {
            return n;
        }
    }
    if (check !== m) {return -1};

}

console.log(findNb(77));
/*
var n = 0;
while (m < 0) m -= ++n**3;
return m ? -1 : n;
different way of looking at the problem... sees m and comparing to the number... you need to 
substract away from the number and if it is truthy return -1... and if it is falsy i.e. zero then 
return the number because you got it.  
++n will increment BEFORE the calculation is done 
**3 will cube n ===> n * n * n
*/


===== 34-write-number-expanded.js =====
/*
input: number
output: return it in a string as expanded form... 

write a for loop... for length of the the number... then add how many zeros.... 



*/

function expandedForm(num) {
    num = num.toString();
    let arr = [];
    let numm = 0;
    for (let i = num.length-1; i >= 0; i--) {
        if (num[numm] === '0') {
            numm++;
            continue;
        }
        arr.push(num[numm] + '0'.repeat(i));
        numm++;
    }
    return arr.join(' + ');

}


console.log(expandedForm(70304));

/*
const expandedForm = n => n.toString().split('').reverse().map( (a, i) => a * Math.pow(10,i))
                                      .filter(a => a > 0).reverse().join(" + ");
*/


===== 35-practice-exercise.js =====
/*
problem: 
write a function that takes a string of HTML-like tags (no attributs just opening and closing tags) 
and returns true if the tags are properly nested and matched and false if otherwise...

isValidHTML("<div><p></p></div>")         // true
isValidHTML("<div><p></div></p>")         // false
isValidHTML("<div><p><span></span></p></div>") // true
isValidHTML("<div><p></span></p></div>")  // false

*/

function htmlChecker(html) {
    html = html.split(/(?=<)/);
    console.log(html);

}

console.log(htmlChecker("<div><p></p></div>"))


===== 35-valid-braces.js =====
/*
input: string of braces...
output: determine if order is valid
return true if the string is valid and false if it is invalid... 
all input strings will be nonempty, and will only consist of parentheses, brackets and curly braces
()[]{}
*/


function validParentheses(braces) {
    let ddict = {
        '}' : '{',
        ')' : '(',
        ']' : '[',
    }
    let stack = [];

    for (let char of braces) {
        if (['(','[','{'].includes(char)) {
            stack.push(char);
        } else if (stack.pop() !== ddict[char]) {
            return false;
        }
    }
    return stack.length === 0 ? true : false;
}


console.log(validParentheses('(((((])))))'))


===== 3-facebook-likes.js =====
/*
create a string similar to FB's so-and-so likes this post
*/

function likes(names) {
    let arrl = names.length
    switch (arrl) {
        case 0: 
            return "no one likes this";
        case 1:
            return `${names[0]} likes this`;
        case 2: 
            return `${names[0]} and ${names[1]} like this`;
        case 3: 
            return `${names[0]}, ${names[1]}, and ${names[2]} like this`;
        default: 
            return `${names[0]}, ${names[1]} and ${arrl -2} others like this`;
    }
}

console.log(likes(['Bill', 'Mark', 'Stew']))



===== 4-count-occurances.js =====
/*
given an array count the amount of occurences of each given number
find the number (Only one) that occurs an odd amount of times

*/
function findOdd(A) {
    let minn = Math.min(...A);
    let maxx = Math.max(...A);
    for (let i = 0; i <= A[i]; i++) {
        for (let j = minn; j<= maxx; j++) {
           let filtered = A.filter(boo => boo === j)
            if (!(filtered.length % 2 === 0)) {
                return j;
            }
        }
    }

}
findOdd([0,1,1,1,2,3,4]);
console.log(findOdd([0,0,1,1,1,2,2,3,3,4,4]));
/*
GOD SOLUTION 
const findOdd = (xs) => xs.reduce((a,b) => a ^ b);
*/


===== 5-difference-array.js =====
/**
given two arrays of numbers
find commonalities of both
remove all occurances of commonalities
*/
let a = [1,2,3,4,5];
let b = [2,4];
function arrayDiff(a,b) {
    for (let i = 0; i< a.length; i++) {
        for (let j = 0; j< b.length; j++) {
            if (a[i] === b[j]) {
                a.splice(i,1);
                i--;
                break;
            }
        }
    }
    return a;
}

/*
this one was a doozy.  set up two for loops... if the value in the first one equals the value in the second one.  the second array.  we need to check a array against the values in b array.  if b array has a value ALL a values need to be removed... so can do that with two for loops.  a splice index since you have zero indexoing you just need to use i!!!  then how many you want to splice which is one thuse a.splice(i,1).. not done yet, since you deleted it.  you need to go back TO NOT SKIP THE VALUE... BECAUSE THE ARRAY HAS BEEN CHANGED.  so you need to decrement i by one when it goes back through the for loop.  then also break if it gets the hit because you already deleted the value you dont need to keep checking it, the job is done its deleted.  
    */


console.log(a,b);


===== 6-digit-sum.js =====
/*
Description:

Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

*/
let n = 16;
function digitalRoot(n) {
    while (n >= 10) {
    n = n.toString().split('').reduce((accu, numm) => accu + Number(numm), 0);
    }
    return n;
}


console.log(digitalRoot(n));
/* 
SOLUTION:  
function digital_root(n) {
return (n -1) % 9 + 1;
}

notes::
i was missing while.... repeatedly execute a block of code as long as a specified condition is true.  
n equals n to string no quotes... puts it in a string... split with quotes breaks up each individual space and puts it in an array for reduce.  reduce params accumulator and the number itself arrow function (not done yet) Number(numm), 0 start from zero...... will continue looping until n is less than or not equal to ten.  put the return n OUTSIDE of the while loop... 

*/


===== 7-regex-telephone.js =====
/*
write a function that accepts an array of 10 integers (between 0 and 9) that returns a string 
of those numbers in the form of a phone number
*/

let numbers = [1,2,3,4,5,6,7,8,9,0];

function createPhoneNumber(numbers) {
    let newString = numbers.join('');
    //string of the format we want the original numbers to be in 

    return newString.replace(
        /(\d{3})(\d{3})(\d{4})/, 
        '($1) $2-$3'
    );


}

console.log(createPhoneNumber(numbers));


===== 8-binary-and-count-ones.js =====
/*
given a number input 
find the binary representation
in the binary representation count the number of 1's
*/

function binaryOnes(number) {
    let countt = 0;
    number = number.toString(2);
    for (let i = 0; i < number.length; i++) {
        if (number[i] === '1') {
            countt++;
        }
    }
    return countt;
}
console.log(binaryOnes(1234))

/*
qita daan

countBits = n => n.toString(2).split('0').join('').length;
*/


===== 9-find-even-or-odd-number-out.js =====
let arr = [1,3,5,7,4,9,11];
function evenOrOdd(arr) {
    let eveCount = 0;
    let oddCount = 0;
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] % 2 === 0) {
            eveCount++;
        } else {
            oddCount++
        }
    }
    for (let j = 0; j<arr.length; j++) {
        if (eveCount > oddCount) {
            if (arr[j] % 2 !== 0) {
                console.log('found it');
                return arr[j];
            }
        } else {
            if (arr[j] %2 === 0) {
                console.log('fount it');
                return arr[j];
            }
        }
    }

    return `${eveCount} and ${oddCount}`;
}

console.log(evenOrOdd(arr));

/*
function findOutlier(int) {
var even = int.filter(a=>a%2==0);
var odd = int.filter(a=>a%2!==0);
return even.length==1? even[0] : odd[0];
}
*/


===== callback-higher-order.js =====
/*
practice for higher-order functions... look that each function takes as an argument callback... and each funciton is returning the params required for basicFunct (the first function)... the console log is 
then linking the two of them toghether... i.e. calculate Area and then basicFunct is being fed in as an argument
    */


//const radius = [3,1,2,4];

const basicFunct = function (firstt, radius, loopVar, numm) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(firstt * loopVar * Math.pow(radius[i], numm))
    }
    return output;
}

const calculateArea = function (callback) {
    return callback(1, [3,1,2,4], (Math.PI), 2)
};

console.log(calculateArea(basicFunct));

const calculateCircumference = function (callback) {
    return callback(2,[3,1,2,4], (Math.PI), 1)
};
console.log(calculateCircumference(basicFunct));

const calcDiameter = function (callback) {
    return callback(2,[3,1,2,4], 1,1)
}
console.log(calcDiameter(basicFunct));




===== case-switch.js =====
function animalSound(animal) {
    switch (animal) {
        case 'dog':
            console.log('Woof!'); // Sound of a dog
        case 'cat':
            console.log('Meow!'); // Sound of a cat
        case 'cow':
            console.log('Moo!');  // Sound of a cow
        case 'duck':
            console.log('Quack!'); // Sound of a duck
        case 'lion':
            console.log('Roar!');  // Sound of a lion
        default:
            console.log('Unknown animal sound'); // If the animal is not recognized
    }
}

console.log(animalSound('duck'));


===== close-two.js =====
/*
continued practice of closures
*/

function myy() {
    let localVal = "i'm local!";
    console.log(localVal);
}

myy();

console.log(localVar);


===== closure-practice.js =====
/*
closure gotcha question
*/

function createButtons() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1050);
    }
}
console.log(createButtons());


===== function-review.js =====
//function greet(name) {
//    console.log("Hello, " + name + "!");
//}
//greet("Allice");
/*
can directly put the argument in the function call >>> greet("Alice") Alice being the argument
*/

//another way to run function as soon as it is written
(function(name) {
    console.log(`Hello, ${name}!`);
})("John");


===== higher-order-funct-exampls.js =====
/*
example used in conjunction with the file callback-higher-order.js
    */

const radius = [3,1,2,4];

const basicFunct = function (radius, loopVar, numm) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(loopVar * Math.pow(radius[i], numm))
    }
    return output;

}

const calculateArea = function (radius) {
    const output = [];
    for(let i = 0; i<radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

const calculateCircumference = function (radius) {
    const output = [];
    for(let i = 0; i<radius.length; i++) {
        output.push(2* Math.PI * radius[i]);
    }
    return output;
};

const calcDiameter = function (radius) {
    const output = [];
    for(let i = 0; i<radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
}


===== map-includes.js =====
const sentence = ['go', 'please', 'fudge', 'yourself', 'shizz', 'great', 'boom'];

const badWords = ['fudge', 'shizz', 'boom'];

//check if the sentence has fudge in it and if so replace with "BADWORD"

const cleanSent = sentence.map(word => badWords.includes(word) ? 'BADWORD' : word).join(' ');

console.log(cleanSent);


===== test-regular-expressions.js =====
/*
intake of an array and output a valid phone number string

possible regex that can help: 
{n} mathes n occurances of the preceding element.  

\d matches any digit 0 to 9

\(\d{3}\) \d{3}-\d{4}
*/
let numbers = ([1,2,3,4,5,6,7,8,9,0]);
function createPhoneNumber(numbers) {

}


/*
more notes... i guess... we just take some notes and then think about it and come back to it later

let regexx = /\(\d{3}\) \d{4}/;

var regex = /hello/;

var str = 'hello world';

var result = regex.test(str);

console.log(result);

returns true;

tests whetehr or not a match has been found... it accepts a string which we have to test against a regular expression and returns true

var regex equals the telephone number

regex.test('input string that you got from the array')

var regexx = telephone regexx

regexx.test('input string')

if equals true then return it in string format


let dateString = "07-12-2024";

let pattern = /(\d{2})-(\d{2})-(\d{4})/;

let newDateString = dateString.replace(pattern);


let dateString = whatever; the original string

let pattern = the things you want to replace it with; 

let newDateString = originalstring.replace(pattern)

replace it with the pattern 


*/;


