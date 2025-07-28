function deleteNth(arr, n) {
    let count = {};
    let result = [];

    for (let num of arr) {

        if (!count[num]) count[num] = 0;

        if (count[num] < n) {
            result.push(num);
            count[num]++;
        }
    }

    return result;
}


console.log(deleteNth([9,2,2,2,3,4,3,3,3,34,4,5,5,55,5],2));
