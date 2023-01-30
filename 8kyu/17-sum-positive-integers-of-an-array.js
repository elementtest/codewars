//given an array return the sum of all the positive integers
function myFunction(arr) {
  arr = [1, -4, 7, 12];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log(arr.length);
      console.log(arr[i]);
      sum += arr[i];
      console.log(sum);
    }
  }
}