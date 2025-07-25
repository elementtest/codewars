/*
example used in conjunction with the file callback-higher-order.js
    */

const radius = [3,1,2,4];

const basicFunct = function (radius, loopVar, numm) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(loopVar * Math.pow(radius[i], numm))
    }
    return output;

}

const calculateArea = function (radius) {
    const output = [];
    for(let i = 0; i<radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

const calculateCircumference = function (radius) {
    const output = [];
    for(let i = 0; i<radius.length; i++) {
        output.push(2* Math.PI * radius[i]);
    }
    return output;
};

const calcDiameter = function (radius) {
    const output = [];
    for(let i = 0; i<radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
}
