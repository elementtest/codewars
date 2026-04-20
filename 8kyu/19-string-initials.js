//have input of a first name and last name and convert them to initials i.e. Joe Schmoe to J.S
function abbrevName(name) {
  var x = name.split(" ");
  var initials = "";
  for (var i = 0; i < x.length; i++) {
    initials += x[i][0] + ".";
  }
  initials = initials.slice(0, -1);
  return initials.toUpperCase();
}
// console.log("hello".slice(-4 , -1));
// .slice(start, end) includes the start index but does NOT include the end index. so it’s like you’re cutting from point A up to (but not touching) point B.
