// given two integers (can be negative) computer the total sum between them 
/*
i.e. (-1, 3) =  -1 + 0 + 2 + 3 = 4
    */
function getSum(a,b) {
    let summ = 0;
    if (a === b) {
        console.log('they are equal')
        return a;
    } else if (a < b) {
    for (let i = a; i <= b ; i++){
        summ += i;
    }
    } else {
        for (let i = b; i <= a; i++) {
            summ += i;

        }
    }
    return summ;
}
console.log(getSum(-50, 0))
