//for a large array create a new array with the sum of the positive numbers in index 0 and the sum of negative numbers in index 1
function countPositivesSumNegatives(input) {
  input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
  var negCount = 0;
  var posCount = 0;
  var retArr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] >= 0) {
      posCount += input[i];
    } else if (input[i] <= 0) {
      negCount += input[i];
    } else {
      var zeroSum = negCount + posCount;
      retArr.push;
    }
  }
  retArr.push(posCount);
  retArr.push(negCount);
  console.log(retArr);
}