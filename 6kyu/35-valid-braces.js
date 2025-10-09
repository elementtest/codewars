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
