// you remembered correctly!!!! Math.max(...array name  ) because it needs to be fed one by one into the 
// array
function betweenExtremes() {
    let arrOne = [23, 3, 19, 21, 16];
    console.log(Math.max(...arrOne));
    console.log(Math.min(...arrOne));
}

betweenExtremes();
