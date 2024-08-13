let num = 765;
function squareDigits(num) {
    let myFunc = numb => Number(numb);
    

    let intArr = Array.from(String(num), myFunc);
    return intArr.map(n => {
        return n * n;
    }).join("");

}
console.log(squareDigits(num));
//console.log(Number("1234"));
//console.log(Number("hello"));
//console.log(Number("45.44"));
//let simpArr = Array.from(String(num));
//console.log(simpArr);
