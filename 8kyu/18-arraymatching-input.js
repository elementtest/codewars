//two params array of a and x input.  if x input is found in the array then return true else return false
function check(a, x) {
  let torf = false;
  for (var i = 0; i < a.length; i++) {
    if (a[i] === x) {
      torf = true;
    }
  }
  return torf;
}