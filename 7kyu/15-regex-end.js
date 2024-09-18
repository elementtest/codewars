let str = "abcdefg";
let ending = "efg";
function solution(str, ending) {
    //MISTAKE
    //let regex = `/${ending}$/`
    let regex = new RegExp(`${ending}$`);
    let result = regex.test(str);
    return result;
}
console.log(solution(str, ending))
/*
function solution(str, ending) {
return str.endsWith(ending);
}
can also use

*/
