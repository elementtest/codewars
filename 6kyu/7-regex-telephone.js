/*
Write a function that accepts an array of 10 integers (between 0 and 9) that returns a string 
of those numbers in the form of a phone number
*/

let numbers = [1,2,3,4,5,6,7,8,9,0];

function createPhoneNumber(numbers) {
    let newString = numbers.join('');
    //string of the format we want the original numbers to be in 

    return newString.replace(
        /(\d{3})(\d{3})(\d{4})/, 
        '($1) $2-$3'
    );


}

console.log(createPhoneNumber(numbers));
