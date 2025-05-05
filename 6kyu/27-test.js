/*
added a test of a similar solution to mine to find the missing character in a 
set of letters 
i.e. 
d,e,f,h
have to find that g is missing
    */
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0);
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i);
    }
  }
  return ("Invalid input");
}

console.log(findMissingLetter(['b','c','d']));
