/*
practice for higher-order functions... look that each function takes as an argument callback... and each funciton is returning the params required for basicFunct (the first function)... the console log is 
then linking the two of them toghether... i.e. calculate Area and then basicFunct is being fed in as an argument
    */


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

console.log(calculateArea(basicFunct));

const calculateCircumference = function (callback) {
    return callback(2,[3,1,2,4], (Math.PI), 1)
};
console.log(calculateCircumference(basicFunct));

const calcDiameter = function (callback) {
    return callback(2,[3,1,2,4], 1,1)
}
console.log(calcDiameter(basicFunct));


