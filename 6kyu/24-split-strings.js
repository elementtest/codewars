/*
take in string
split string into pairs of 2
if string.length is an odd number:
then final pair's missing second character: 
place an underscore _
*/

function solution(str) {
    let newArr = [];
    let countt = 0;
    if (str.length % 2 === 0) {
        console.log('string is even length');
    } else {
        console.log('string is odd length');
        str = str + "_";
    }
    console.log(str.length);
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        if (countt !== 2) {
            newArr.push(str[i]);
            countt++;
        } else {
            newArr.push('%');
            countt = 0;
        }
    }
    //console.log(newArr);
    //return str.split(/(?=\w{2})/g);
    console.log(newArr.toString().split('%'));
}

console.log(solution('ddd'));

/*
problem... the split() method is looking at the string then 
deleting the delimiter (fancy name to say what you are searching for to split something)
then spliting the string based on the position of the delimiter
so the problem you were having is you were saying str.split(/\w{2}/) which is correct
the problem is it is deleting every two characters in the string... leaving you with nothing 
but empty strings as a result
*/
