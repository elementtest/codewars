/*
continued practice of closures
*/

var addTo = function (passed) {
    var inner = 2;
    return passed + inner;
};

console.log(addTo(3));
