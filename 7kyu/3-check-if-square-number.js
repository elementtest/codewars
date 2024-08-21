// return true if the number has a square root and false if not
let n = 0;
var isSquare = function(n) {
    if (n === 0) {
        return true
    } else {
    for (let i = 1; i * i <=n; i++) {
        if (i * i === n) {
            return true;
        }
        
    }
    return false
    }
}
console.log(isSquare(n));
