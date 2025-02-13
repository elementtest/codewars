/*
goal is to given an array to take the past three numbers and then to add them together to create the 
next number in the array
i.e. 
1,1,1,3,5
you need to create a tribonacci function that given a signature array/list, returns the 
first n elements - signature included of the so needed sequence
*/


function tribonaci(signature, n) {
    let countt = 2;
    if (n == 0) {
        return [];
    } else if (n == 1) {
        return signature[0];
    } else {
    while (signature.length < n) {
        let numm = 0;
        numm += signature[countt];
        numm += signature[countt-1];
        numm += signature[countt-2];
        signature.push(numm);
        countt++;
        }
        return signature;
    }
}

console.log(tribonaci([1,1,1], 1));
/*
learned a lot with this one

function trib(sig, n) {
for (var i = 0; i < n-3; i++) {
sig.push(sig[i] + sig[i+1] + sig[i+2])
}
return sig.slice(0,n);
}
*/
