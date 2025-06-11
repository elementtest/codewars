/*
continued practice of closures
*/

function counter() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);

    }

    return increment;
}

const myFunc = counter();

myFunc();
myFunc();
myFunc();
