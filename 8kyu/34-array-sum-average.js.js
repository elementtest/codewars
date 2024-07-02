//given an array of numbers (or other values) return the average.  make sure the array accounts for garbage values and how to discriminate between them.  use of typeof array[i] === 'number' helps
function findAverage(array) {
  let summ = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && typeof array[i] === 'number') {
    summ += array[i];
      }
  }
  if (array.length>0 && summ > 0) {
    summ /= array.length;
  return summ;
    } else {
      return summ;
    }
}
/*
// BETTER WAY TO DO IT 

var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind) => acc + ind, 0) / array.length
}
Arrow Function Syntax:

    var find_average = (array) => { ... } defines an arrow function named find_average that takes one parameter, array.


Conditional (Ternary) Operator:

    array.length === 0 ? 0 : ... checks if the length of the array is zero.
    If the array is empty (array.length === 0), the function returns 0

Array Reduction:

    array.reduce((acc, ind) => acc + ind, 0) is used to sum all elements in the array.
        reduce method takes a callback function (acc, ind) => acc + ind and an initial value 0.
        acc (accumulator) is the running total.
        ind (current value) is the current element in the array.
        For each element in the array, acc + ind adds the current element to the running total.
        Starting with an initial value of 0, it sums all elements in the array.

Calculating the Average:

    The sum of the array elements (array.reduce(...)) is divided by the length of the array (array.length) to get the average.

*/
