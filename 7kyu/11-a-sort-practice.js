// below will return numbers in arr from highest to lowest
function sortt() {
    let arr = [555, 4, 33223, 23424324324]
    // does not sort the numbers at all
    //return arr.sort();
    //one below will sort the numbers from lowest to highest 
    //return arr.sort((a,b) => a - b);
    //one below will sort the numbers from highest to lowest
    return arr.sort((a,b) => b - a);
}
console.log(sortt());
