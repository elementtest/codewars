//given an array of numbers, return the smallest number in the combined array.
function findSmallestInt(arr) {
  let vall = arr[0];
  for (let i = 0; i < arr.length; i++){
   if (arr[i] < vall)  {
     vall = arr[i];
   }
  }
  return vall;
}
/* 
//MISTAKES
    made the assumption that i would let the initial value be 0.  this is wrong why.  because if they are are all positive numbers then none of them are less than zero and the thing fails.  you want to make the initial be the first value of the array because it will compare that againast all other values.  if the first value is the lowest then it will stop.
 */
/*
 solution::: 
 function findsmall(param) { 
    console.log(Math.min(...param));
 }
k
 basically the ... spread operator takes it and turns it INTO INDIVIDUAL VALUES aka arguments 
 for the Math.min built in function to work correctly.  

 the spread operator (...) in javascript is a powerful and versatile tool that allows for the 
 expansion of iterable elements like arrays or strings into individual elements or arguments.  
 k

 
 */
