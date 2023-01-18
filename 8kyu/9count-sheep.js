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
