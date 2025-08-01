/*
given an array output how many smiley faces there are in said array
*/

//let arr = [':);):-):~);~);~):D;D:-D:~D;-D;~D'];
let arr = ['sdjfklsdjfkldsjkflsjfsdlkjf'];
function countSmileys(arr) {

    const regX = /[;:][-~]?[)D]/g;

    let result = arr.join().match(regX);

    if (result === null){
        result = 0;
    }

    if (result.length > 0) {
        return result.length;
    } else {
        return 0;
    }

}


console.log(countSmileys(arr));
