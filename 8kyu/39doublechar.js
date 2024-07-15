// take a string and then double the characters in in it and return the new string
// you had an issue where you were declaring the variable but not initializing it.  
// this basically made it have undefined at the beginning of the string 
function doubleChar() {
    let str = 'abcd';
    str = str.split('');
    let strTwo = '';
    for (let i = 0; i < str.length; i++) {
        strTwo += str[i];
        strTwo += str[i];
    }
    console.log(strTwo);


}
doubleChar();
/* 
COMPACT SOLUTION 

const doubleChar = (str) => str.split("").map(c => c + c).join("");


*/
