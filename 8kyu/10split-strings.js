//reverse a string
//function solution(str) {
//  var x = str.split("");
//  x = x.reverse("");
//  x = x.join("");
//  return x;;;
//}
//reverse a string
function solution(str) {
    return str.split("").reverse().join("");
}
//arrow function 
const solution = str => str.split('').reverse().join("");
