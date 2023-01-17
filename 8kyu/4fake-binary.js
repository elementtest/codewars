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
}