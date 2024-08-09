// ISSUE.... split the string but did not store it
// ISSUE ... you need to declare in the || or statements the variable again and again
let str = "aedgededed";
function getCount(str) {
    str = str.split('');
    console.log(str);
    let countt = 0;
    str.map(letter => {
        return (letter === "a" || letter ==="e" || letter ==="i" || letter === "u") ? countt += 1 : countt+= 0;
    })
    console.log(countt);
}
getCount(str);
