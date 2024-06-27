//given two strings determine which one is longer then return long short long or short long short
function solution(a, b){
  // your code here
  {
    return a.length < b.length ? a + b + a : 
    b + a + b
  }
}
