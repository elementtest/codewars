/*
goal is to given an array to take the past three numbers and then to add them together to create the 
next number in the array
i.e. 
1,1,1,3,5
you need to create a tribonacci function that given a signature array/list, returns the 
first n elements - signature included of the so needed sequence
*/


function tribonaci(signature, n) {
    let newVall = 0;
    for (let i = 0; i < signature.length; i++) {
        newVall += signature[i];
    }
    signature.push(newVall);
    while (signature.length <= n) {
    for (let j = 3; j < n; j++) {
    }
    }
}
console.log(tribonaci([1,1,1], 10));
