//given array of numbers if num is positive convert to negative and if negative convert to positive
 function invert(array) {
  array =  [-35,57,-20,-75,-81,63,51,-45,18,-70,-17,-87,70];
   for (let i = 0; i < array.length; i++) {
     if (array[i] < 0) {
       array[i] = Math.abs(array[i]);}
     else {
     array[i] *= -1;
   }
}
 }