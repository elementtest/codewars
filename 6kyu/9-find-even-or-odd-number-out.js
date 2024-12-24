let arr = [1,3,5,7,4,9,11];
function evenOrOdd(arr) {
    let eveCount = 0;
    let oddCount = 0;
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] % 2 === 0) {
            eveCount++;
        } else {
            oddCount++
        }
    }
    for (let j = 0; j<arr.length; j++) {
        if (eveCount > oddCount) {
            if (arr[j] % 2 !== 0) {
                console.log('found it');
                return arr[j];
            }
        } else {
            if (arr[j] %2 === 0) {
                console.log('fount it');
                return arr[j];
            }
        }
    }

    return `${eveCount} and ${oddCount}`;
}

console.log(evenOrOdd(arr));

/*
function findOutlier(int) {
var even = int.filter(a=>a%2==0);
var odd = int.filter(a=>a%2!==0);
return even.length==1? even[0] : odd[0];
}
*/
