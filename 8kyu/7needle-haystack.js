//Can you find the needle in the haystack? write a function to find 'needle' in an array and return found at position

function findNeedle(haystack) {
  // your code here
  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return "found the needle at position " + haystack.indexOf("needle");
    }
  }
}