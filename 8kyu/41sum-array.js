// given an array of mixed strings and numbers return the total sum of the entire array
function sumMix() {
    let x = [9, '8', 7, '6']
    let summ = 0;

    for (let i = 0; i< x.length; i++) {
        x[i] = Number(x[i]);
        summ += x[i];
        
    }
    console.log(summ)
}
sumMix();

/*
function sumMix(x) {
return x.map(a => +a).reduce((a, b)) => a + b, 0);
}
*/
