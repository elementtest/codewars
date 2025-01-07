/*
given a string of text if teh letter only appears once then replace with ( opening bracket

else 

if it repeats then replace with a ) closing bracket
*/


let str = 'oligarch';
function letterToBracket(str) {
    var onee =  str.match(/([^])/);
    console.log(onee);
}
