/*
given a string of multiple numbers, return the highest and lowest values
    */
function highAndLow() {
    // split the input string into an array of strings seperated by a space ' '
    let numArray = numbers.split(' ');

    // convert each string element into a number
    numArray = numArray.map(Number);

    // find the highest and lowest numbers
    let highest = Math.max(...numArray);
    let lowest = Math.min(...numArray);

    return `${highest} ${lowest}`;

}
