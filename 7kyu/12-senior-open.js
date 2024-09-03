// given two inputs age and handicap determine whether to put in "senior" or "open"
let data = [[3, 12],[55,1],[91, -2],[53, 23]];

function openOrSenior(data) {
    let conn = data.map(function([x, y]) {
        return (x >= 55 && y > 7) ? "Senior" : "Open";
    }); // This closes the map function call
    return conn;
    
}

console.log(openOrSenior(data)); // Output: [30, 70, 110]
/*

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
*/
