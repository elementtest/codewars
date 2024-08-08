let a = [1,2,3,4,5]
// every second number in an array needs to be doubled 
function doubleEveryOther(a) {
    return a.map((numm, index) => {
        return index % 2 !== 0 ? numm * 2 : numm;
    })
}
console.log(doubleEveryOther(a));
//the return inside of map sends the results back to map method, which then includes that result in the 
//new array.  once all elements have been processed the outer return sends the new array back 
// as the output of the doubleEveryOther function
