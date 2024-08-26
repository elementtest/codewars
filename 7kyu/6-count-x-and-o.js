let str = "ooom"
//return a boolean if a string has the same amount of x's and o'x 

function XO(str) {
    let xx = 0;
    let oo = 0;
    for (let i = 0; i< str.length; i++) {
         let si = str[i].toLowerCase();
        if (si === 'x') {
            xx += 1;
        } else if  (si === 'o') {
            oo += 1;
        } else {
            oo += 0;
        }

}
if (xx === oo) {
    return true;
} else {
    return false;
}
}

console.log(XO(str));

/*
function XO(str) {
lex x = str.match(/x/gi);
//   /x/gi ==> looks for the character x... g stands for global means find all occurences of x
i stands for case insensitive means it will match both X and x
let o = str.match(/o/gi);
match all occurences of o (global) not just hte first one and match both o and O with the i insensitive ZZ



*/
