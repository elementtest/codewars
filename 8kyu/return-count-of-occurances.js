//create a function that accepts a string and single character and returns an integer amount of occurrences of how many times the character appears in the string
function strCount(str, letter){  
  str = str.split("");
  let occ = 0
  for (let x = 0; x < str.length; x++) {
    if (str[x] === letter) {
      occ++;
    } 
  }
  return occ;
}