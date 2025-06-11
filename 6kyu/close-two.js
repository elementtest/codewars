/*
continued practice of closures
*/

function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable);
        let innerVariable = 'I am inside!';
        console.log(innerVariable);
    }

    innerFunction();
}

outerFunction();


