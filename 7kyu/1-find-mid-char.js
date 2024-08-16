let s = "doob";
function getMiddle(s) {
    let midd = Math.floor(s.length / 2);
    let lengthh = s.length;
    if (lengthh % 2 === 0) {
        console.log(s.slice(midd -1, midd + 1));
    } else {
        console.log(s.slice(midd, midd + 1));
    }

    
    //if (s % 2 === 0) {
    //    console.log(s.slice(midd-1, midd+1));
    //} else {
    //    console.log(s.slice(( midd ), (midd + 1)))
    //}
}
getMiddle(s);

/*
what i learned.. kept trying to do % 2 on a string it didnt work! and i went into loops without 
first console logging a bit to even see if the values were valid.  
*/
