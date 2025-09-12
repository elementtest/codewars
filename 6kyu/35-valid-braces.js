/*
input: string of braces...
output: determine if order is valid
return true if the string is valid and false if it is invalid... 
all input strings will be nonempty, and will only consist of parentheses, brackets and curly braces
()[]{}
*/


function validParentheses(braces) {
    //let matches = braces.match(/[()\[\]{}]/g).length;
    //return matches;
    //return braces.match(/[\[{(]/g).length === braces.match(/[\])}]/g).length ? true : false;
    const oneR = (braces.match(/\[/g)?.length === braces.match(/\]/g)?.length);
    const twoR = (braces.match(/{/g)?.length === braces.match(/}/g)?.length);
    const threeR = (braces.match(/\(/g)?.length === braces.match(/\)/g)?.length);

    return (oneR && twoR && threeR) ? true : false;
}



console.log(validParentheses('[]{}()]'));
