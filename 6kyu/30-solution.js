function deleteNth(arr,x) { 
    var cache = {};
    return arr.filter(function(n) {
        cache[n] = (cache[n]|0) + 1;
        return cache[n] <= x;
    });
}


console.log(deleteNth([1,1,1,1,1,2,2,2,22,3,3,3,5,5,5,7],2))
