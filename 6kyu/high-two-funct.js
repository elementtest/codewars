//const radius = [3,1,2,4];

const basicFunct = function (firstt, radius, loopVar, numm) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(firstt * loopVar * Math.pow(radius[i], numm))
    }
    return output;
}

const calculateArea = function (callback) {
    return callback(1, [3,1,2,4], (Math.PI), 2)
};

//console.log(calculateArea(basicFunct));

const calculateCircumference = function (callback) {
    return callback(2,[3,1,2,4], (Math.PI), 1)
};
console.log(calculateCircumference(basicFunct));

const calcDiameter = function (callback) {
    return callback(2,[3,1,2,4], 1,1)
}
//console.log(calcDiameter(basicFunct));


