/*
given a string with a number in it your task is to order the string with the number in it properly 

i.e. 
test4 is2 this1 a3
becomes 
this is a test( with the numbers included in the string)
*/


function order(words) {
    const regX = /\d/;

    words = words.split(' ');

    let result = words.sort((a,b) => {
        const numA = a.match(regX);
        const numB = b.match(regX);

        return numA - numB;
    })
    return result.join(' ');
}
console.log(order("is2 Thi1s T4est 3a" ));
