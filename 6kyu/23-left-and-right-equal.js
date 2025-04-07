/*
find the index position N in an array where the sum of all the integers on the right side of it.  and the sum of all the integers to the left side of it are equal to one another.  if this does not exist then return -1 
*/

function findEvenIndex(arr) {
    let summOne = 0;
    for (let i = 0; i < arr.length; i++) {
        //console.log(i);
        summOne += arr[i];
        //console.log(summOne);
        console.log('ok');
        let summTwo = 0;
        for (let j = (i+1); j < arr.length; j++) {
            //console.log(j);
            summTwo+= arr[j];
            if (summOne === summTwo) {
                return arr[j];
            }
        }
    }

}

console.log(findEvenIndex([1,2,3,4,3,2,1]));


/*
manually explain what needs to happen:
go through each number
start with first number
sum numbers to left of it (zero)
sum numbers to the right of it (?)
if left sum is equal to the right 
then: return the number (n)
if no number where this exists: 
return -1
*/
