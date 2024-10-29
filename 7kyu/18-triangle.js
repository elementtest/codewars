let a = 10;
let b = 20;
let c = 20;
function isTriangle(a,b,c) {
      return a + b > c && b + c > a && a + c > b ? true : false;
}
console.log(isTriangle())
