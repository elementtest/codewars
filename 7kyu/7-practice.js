let s = "the quick brown fox";
function findShort(s) {
    s = s.split(" ")
    console.log(s);
    s = s.map(d => d.length)
    console.log(s);

}
console.log(findShort(s));
