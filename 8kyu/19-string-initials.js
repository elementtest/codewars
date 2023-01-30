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