let s = "sees";

function getMiddle(s) {
    let midd = Math.floor(s.length / 2);
    console.log(midd);
    
    if (s.length % 2 !== 0) { // Check if the length is odd
        console.log('it is odd');
        console.log(s.slice(midd, midd + 1)); // Extract the middle character
    } else {
        console.log('it is even');
        console.log(s.slice(midd - 1, midd + 1)); // Extract the two middle characters
    }
}

getMiddle(s);

/*
Math.floor(s.length)
Math.floor(s.length)
Math.floor(s.length)
Math.floor(s.length)
s.slice
s.slice
s.slice
s.slice
*/
