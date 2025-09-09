/*
input: string of braces...
output: determine if order is valid
return true if the string is valid and false if it is invalid... 
all input strings will be nonempty, and will only consist of parentheses, brackets and curly braces
()[]{}
*/


function validParentheses(parenStr) {
    let matches = parenStr.match(/[()\[\]{}]/g).length;
    return matches;


}


console.log(validParentheses('{}{}{}{}{}{}'))
