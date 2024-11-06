let number = 93;
function solution(number) {
    let arr = [];
    for (i=3; i<number; i+=3) {
        arr.push(i)
    }
    for (i=5; i<number; i+=5) {
        arr.push(i)
    }
    console.log(arr.reduce((acc, num) => acc + num, 0));

}
solution(number);

/*
error... i was using i + 3... that does not update i resulting in infinite loop
have to use i+=3... then i will be updated
*/
