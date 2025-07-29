/*
input: numbers

output:  given N only allow N number of repeats.  do not change the order of the numbers

i.e.
N is 2
[1,2,3,1,2,1,2,3]
becomes: 
[1,2,3,1,2,3]

N is 1
[20,37,20,21]
becomes: 
[20,37,21]
*/

function deleteNth(arr,n) {
    let obj = {};
    let res = [];

    for (let num of arr) {
        if (!(obj[num])) {
            obj[num] = 0;
        }

        if (obj[num] < n) {
            res.push(num);
            obj[num]++;
        }
    }
    return res;

}


console.log(deleteNth([1,1,1,1,1,2,2,2,2,2,23,3,33,3,3,4,66,9], 2))

/*
what i learned:  

use let whatever of array to loop over objects

you can check if something exists or not in an object by using an if statement and then this 

key[value]

ALL javascript values MUST HAVE KEYS....

if the value is less then n... push the number to the results array
add a counter to the value of the object in the obj object

so what is happening... you iterate through an array stating a num to represent each element in the array

at the same time you can use that element to check an object... so i.e. if the current number being

iterated over is 3 in the array then it will also check if a value exists at 3 in the obj object


*/

