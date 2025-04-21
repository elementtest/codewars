function solution(str) {
    if (typeof str !== 'string') return [];

    if (str.length % 2 !== 0) {
        str += "_";
    }

    return str.match(/.{2}/g) || [];
}

console.log(solution('abdsdfsdf'));
