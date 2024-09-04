/*
given a number first check if the number has a square root.  if it does not then return -1....
if it does then return the next square root.  i.e. 16 return 25 because 4 is first and 5 is second
    */
let sq = 25
function findNextSquare(sq) {
    let dd =  Math.sqrt(sq);
    return !Number.isInteger(dd) ? -1 : ((dd+1)*(dd+1))

}

console.log(findNextSquare(sq));
