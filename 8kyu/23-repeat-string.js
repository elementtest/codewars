//take a string and return it n times
function repeatStr(n, s) {
  var tTotal = "";
  for (let i = 0; i < n.length; i++) {
    tTotal += s;
  }
  return tTotal;
}