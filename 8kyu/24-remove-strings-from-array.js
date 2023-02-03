//given array remove all strings inside of it
function filter_list(l) {
  l = [1, 2, "aasf", "1", "123", 123];
  var rrreturn = l.filter((btripD) => typeof btripD !== "string");
  console.log(rrreturn);
}