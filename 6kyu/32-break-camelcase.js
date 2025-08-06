/*
given camelcase word break it up..
i.e. camelCase => camel Case
*/


function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ');
}


console.log(solution('camelCase'));


