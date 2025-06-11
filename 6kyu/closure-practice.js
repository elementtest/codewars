/*
closure gotcha question
*/

function createButtons() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1050);
    }
}
console.log(createButtons());
