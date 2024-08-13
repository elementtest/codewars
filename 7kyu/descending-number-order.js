let n = 390842758943589;
function descendingOrder(n) {
    return Number(String(n)
        .split('')
        .sort((a, b) => b - a)
        .join(''));
}
console.log(descendingOrder(n));
/*
let people = [
{name: 'John', age: 30},
{name: 'Jane', age: 25}, 
{name: 'Alice', age: 28}
];
people.sort((a,b) => 
a.age - b.age);
console.log(people)
// Output: [{name: 'Jane', age: 25}, {name: 'Alice', age: 28}, {name: 'John', age: 30}]
*/
/*
so what did i learn here... you can use sort to get an ascending or descending order in a list of numbers... if you dont specify it will do it alphabeticallys.

basic way to do sort... sort a representing the first value and b representing the second value
arrow function b - a
it will then go thru the entire array... first value and second value.  b - a, if it is a negative number or a positive number it will switch positions in the array
next comparison: the subsequent two values after the switch.  
*/
