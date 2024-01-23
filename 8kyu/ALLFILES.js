//reverse a string
function solution(str) {
  var x = str.split("");
  x = x.reverse("");
  x = x.join("");
  return x;
}
//reverse a string//turn an array into a string
function smash (words) {
  smashSent = words.join(' '); 
  return smashSent;
};//write a program that finds the summation of every number from 1 to num.
const summation = (num) => (num * (1 + num)) / 2;

//started out using a for loop that was complicated and changed it to fit with a 
/*
tutorial.. tutorial pointed out that you can use the math formula to make it much 
more consice and easy to read. 

What i learned?
Try and look up the formula and it will be way easier instead of doing multiple lines
to do a loop.  

Also arrow functions:  

function keyword is gone.  

you need to declare a variable using let or const. 

const nameOfConst = (PARAMETERS) => EXECUTE CODE;

and the return is assumed in an arrow function 
*///return n * m if either is less than zero then return zero

function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else 
  return n * m;
}
//given an array of ten games between a home team and an opposing team calculate the score at the end. win = +3 pts.  loss = o points. tie = 1 point

function points(games) {
    let score = 0;
    for (i=0; i<games.length; i++) {
      let newStr = games[i].toString();
      let x = newStr.charAt(0);
      let y = newStr.charAt(2);
        if (x > y) {
          score += 3;
        } else if (y > x) {
          score += 0;
        } else {
          score += 1;
    }

  }
  return scor//calculate price of mangoes based on a 3 mangoes for the price of 2 rule.
 mango = (quantity, price) => price * (quantity - Math.floor(quantity / 3));//take a string of words ina  sentence and reverse it

 return str.split(" ").reverse().join(" ");

 //something that frequently happens in web development
 //converting between different data types i.e. between strings and arrays

 //array method join 

 //string method split 
 /*
if you wanna convert forma  string to an array you call the split method.  
will take the entire string and split it based on what you place as the argument
of the method... i think it has to find it in the string though. lets try that .  ok so im right... the split method has to be related to the string. i.e. if your string doesnt have a q then you cant use q to split it. 

you can also use regular expressions with the split method

split also turns the original string into an array k
by using split with an empty string you will be splitting on every single character

every single character there is nothing so that is what you are splitting it on 

string.split('')



JOIN METHOD
join will do the exact opposite of split and just join 


 *///given an array return the sum of all the positive integers
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
}//two params array of a and x input.  if x input is found in the array then return true else return false
function check(a, x) {
  let torf = false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === x) {
      torf = true;
    }
  }
  return torf;
}//have input of a first name and last name and convert them to initials i.e. Joe Schmoe to J.S
function abbrevName(name) {
  var x = name.split(" ");
  var initials = "";
  for (var i = 0; i < x.length; i++) {
    initials += x[i][0] + ".";
  }
  initials = initials.slice(0, -1);
  return initials.toUpperCase();
}//have an array of birds filter out the geese from it.
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((x) => !geese.includes(x));
}
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
 }//for a large array create a new array with the sum of the positive numbers in index 0 and the sum of negative numbers in index 1
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
}//take a string and return it n times
function repeatStr(n, s) {
  var tTotal = "";
  for (let i = 0; i < n.length; i++) {
    tTotal += s;
  }
  return tTotal;
}//given array remove all strings inside of it
function filter_list(l) {
  l = [1, 2, "aasf", "1", "123", 123];
  var rrreturn = l.filter((btripD) => typeof btripD !== "string");
  console.log(rrreturn);
}25th completion
//take input of human years and convert it to cat or dog years first year is + 15 next is + 9 and subsequent is 4 or 5 depending on cat or dog
var humanYearsCatYearsDogYears = function (humanYears) {
  var cCount = 1;
  var cCat = 0;
  var cDog = 0;
  for (let i = 0; i < humanYears; i++) {
    if (cCount === 1) {
      cCount += 1;
      cCat = 15;
      cDog = 15;
    } else if (cCount === 2) {
      cCount += 1;
      cCat = cCat + 9;
      cDog = cDog + 9;
    } else {
      cCount += 1;
      cCat = cCat + 4;
      cDog = cDog + 5;
    }
  }
  return [humanYears, cCat, cDog];
};//given a string remove all the vowels
function shortcut(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (
      (string[i] != "a") &
      (string[i] != "e") &
      (string[i] != "i") &
      (string[i] != "o") &
      (string[i] != "u")
    ) {
      result += string[i];
    }
  }
  return result;
}//takes a non negative integer n as input and returns a list of all the powers of 2 with the exponent ranging from 0 to n
function powersOfTwo(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i));
  }
  return arr;
}//sum the differences between the consecutive pairs in the array in descending order
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
*///Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  const numsArr = Array.from(String(n), Number);
  return numsArr.reverse();
  
}
//LINE 3::: convert the number into a string.. why?  String types in JS can be array-like or iterable which is EXACTLY WHAT the first argument from arrray.from() method expects//given a cube that is cut cuts times find the number of cubes that have red paint on them (the cube is painted in red)

countSquares = (cuts) => (cuts == 0 ? 1 : 6 * cuts * cuts + 2);// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
 newArr = Array.from(String(str));
  newArr.shift();
  newArr.pop();
  x = newArr.join('');
  return x;

};
 //use the join method to convert the array to a string and also specifiy how you want to seperate the seperate indices i.e. yourArray.join(' - ') will seperate with a dash.  yourArray.join('') will just join the string with no seperator in between 
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
  y = Array.from(String(x));
  for (i = 0; i < y.length; i++) {
    if (y[i] < 5) {
      y[i] = 0;
    } else {
      y[i] = 1;
    }
  }
  z = y.join("");
  return z;
}//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
// Sum Numbers
function sum (numbers) {
var summ = 0;
  for (var i= 0; i< numbers.length; i++) {

    summ += numbers[i];
  }
return summ;
    
};//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade (s1, s2, s3) {
  summ = ((s1 + s2+ s3)/3);
  if (summ >= 90) {
    return 'A';
  } else if (summ >= 80) {
    return 'B';
  } else if (summ >= 70) {
    return 'C';
  } else if (summ >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade (s1, s2, s3) {
  summ = ((s1 + s2+ s3)/3);
  if (summ >= 90) {
    return 'A';
  } else if (summ >= 80) {
    return 'B';
  } else if (summ >= 70) {
    return 'C';
  } else if (summ >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}//Can you find the needle in the haystack? write a function to find 'needle' in an array and return found at position

function findNeedle(haystack) {
  // your code here
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + haystack.indexOf("needle");
    }
  }
}//make a string uppercase

function makeUpperCase(str) {
  x = str.toUpperCase();
  return x;
}//remember to use .toUpperCase() method
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num) {
  let sheepStr = "";
  for (let i = 1; i <= num; i++) {
    sheepStr += i.toString() + " sheep...";
  }

  return sheepStr;
};
//start a string that is empty will be the string that you add to.  
//add a for loop that repeats the amount of times that num is done.  
// make the variable i into a string and pass it into sheepStr using i.toString()
//concatenate the string on the end with " sheep..." 
// each time the for loop goes through it will place the number which is i in the front and then concatenate new string on each iteration through on the end saved into the sheepStr string

//given a string turn it into an array make each element return the element and the element length along side it
function myFunction() {
  str = "apple banna pear sdfjlksdfj";
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] += " " + str[i].length;
  }
  console.log(str);
}
// This is the 8kyu level of codewars. will place exercises here
// currently a place to record codewars solutions
// possible place of other solutions to be posted here
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0) {
      return number * 8;
    } else {
      return number * 9;
    }
}
