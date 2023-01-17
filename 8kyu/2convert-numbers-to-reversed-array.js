//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  const numsArr = Array.from(String(n), Number);
  return numsArr.reverse();
  
}
//LINE 3::: convert the number into a string.. why?  String types in JS can be array-like or iterable which is EXACTLY WHAT the first argument from arrray.from() method expects