//given a string turn it into an array make each element return the element and the element length along side it
function myFunction() {
  str = "apple banna pear sdfjlksdfj";
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] += " " + str[i].length;
  }
  console.log(str);
}