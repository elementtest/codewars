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


