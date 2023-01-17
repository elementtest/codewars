// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
 newArr = Array.from(String(str));
  newArr.shift();
  newArr.pop();
  x = newArr.join('');
  return x;

};
 //use the join method to convert the array to a string and also specifiy how you want to seperate the seperate indices i.e. yourArray.join(' - ') will seperate with a dash.  yourArray.join('') will just join the string with no seperator in between 
