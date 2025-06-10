/*
closure gotcha question
*/

function createButtons() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1050);
    }
}
console.log(createButtons());
