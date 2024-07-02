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