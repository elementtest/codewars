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
