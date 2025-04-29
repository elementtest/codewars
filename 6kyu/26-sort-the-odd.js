/*
you will be given an array of numbers.  you have to sort the odd
numbers in ascending order while leaving the even numbers at their original positions.  
so have to determine if it's even first can use % 2 to determine it.  
second thing is the odd numbers could use something like sort... 
but how do we keep the order?  maybe two loops.  can have a check on each of the numbers that sounds like the best way to do it. 
first loop goes through the array. second loop executes on each element
in the array.  deletes the even numbers so if number % 2 is zero then 
dont add but if not then add to new array.  new array.  sort... smallest to biggest.. 
*/

function sortArray(array) {
    let oddArr = [];
    for (let a = 0; a < array.length; a++) {
        if (array[a] % 2 !== 0) {
            oddArr.push(array[a]);
        }
    }
    oddArr = oddArr.sort((a,b) => a - b);

    let totalArr = array.map(num => {
        if (num % 2 !== 0) {
            return oddArr.shift();
        } else {
            return num;
        }
    })
    
    //console.log(oddArr);
    return totalArr;

}

console.log(sortArray([5,3,2,8,1,4]));


/*
function sortArray(array) {
const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
return array.map((x) => x % 2 ? odd.shift() : x);
}
*/
