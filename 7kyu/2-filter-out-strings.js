/*
given a list of strings and numbers filter out the strings and just return the numbers
    */
let l = [1,2,3,'a', 'b', 44, 'ddd', 1000, 'pineapple']

function filter_list(l) {
    return l.filter(itm => {
        return typeof itm === "number"
    })
}

console.log(filter_list(l));
