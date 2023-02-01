//have an array of birds filter out the geese from it.
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((x) => !geese.includes(x));
}
