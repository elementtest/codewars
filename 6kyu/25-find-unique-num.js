/*
there is an array with some numbers.  All numbers are equal except for one.  Try to find it.   
it is guaranteed that array contains at least 3 numbers 
the tests contain some very huge arrays. so think about performance.  
*/

function findUniq(arr) {
    if ((arr[0] !== arr[1]) && (arr[0] !== arr[2])) {
        return arr[0];
    } else {
        for (let i =1; i < arr.length; i++) {
            //console.log(arr[i]);
            //console.log(arr[i-1]);
            //console.log('k');
            if (arr[i] !== arr[i-1]) {
                return arr[i]
            }
        }
    }


    }

console.log(findUniq([1,1,1,0,1,1,1,1,1]));

/*
function findUniq(arr) {
arr.sort((a,b)=>a-b);
return arr[0]==arr[1]?arr.pop():arr[0]
}
*/
