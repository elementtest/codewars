/*
given a string with a number in it your task is to order the string with the number in it properly 

i.e. 
test4 is2 this1 a3
becomes 
this is a test( with the numbers included in the string)
*/

function order(words) {
    const regX = /\d+/gm;
    const result = words.match(regX);
    for (i = 0; i < words.length; i++) {
        console.log('ok');
        console.log(words[i].match(regX))

    }

}

console.log(order("Thi1s is2 3a T4est"));
