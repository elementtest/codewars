/**
given two arrays of numbers
find commonalities of both
remove all occurances of commonalities
*/
let a = [1,2,3,4,5];
let b = [2,4];
function arrayDiff(a,b) {
    for (let i = 0; i< a.length; i++) {
        for (let j = 0; j< b.length; j++) {
            if (a[i] === b[j]) {
                a.splice(i,1);
                i--;
                break;
            }
        }
    }
    return a;
}

/*
this one was a doozy.  set up two for loops... if the value in the first one equals the value in the second one.  the second array.  we need to check a array against the values in b array.  if b array has a value ALL a values need to be removed... so can do that with two for loops.  a splice index since you have zero indexoing you just need to use i!!!  then how many you want to splice which is one thuse a.splice(i,1).. not done yet, since you deleted it.  you need to go back TO NOT SKIP THE VALUE... BECAUSE THE ARRAY HAS BEEN CHANGED.  so you need to decrement i by one when it goes back through the for loop.  then also break if it gets the hit because you already deleted the value you dont need to keep checking it, the job is done its deleted.  
    */


console.log(a,b);
