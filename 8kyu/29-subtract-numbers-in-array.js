//sum the differences between the consecutive pairs in the array in descending order
sumOfDifferences = (arr) =>
  arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

/*
example array 
[2,1,10]
want you to return like so 
(10-2) + (2 -1)
8 * 1 = 9

is the same as just taking the highest number and subtracting it from the lowest number
10 - 1 = 9

array function
nameOfArrowFunction = (parementers-here) => 
the parameter is an array so if the length is greater than one THEN

take the max number of the array represented by ...arr
and the minimum number of the array represented also by .arr 
and subtract the two.  

: 0

this is the else statement.  

else return 0 
*/