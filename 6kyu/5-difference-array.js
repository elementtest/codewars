/*
given two arrays of numbers
find commonalities of both
remove all occurances of commonalities
*/
let nOne = [1,1,3,4,5];
let nTwo = [6,3,8,3,1,1];
function killComm(nOne, nTwo) {
    let emptArray = [];
    emptArray = [...nOne, ...nTwo];
    return emptArray;
}


console.log(killComm(nOne, nTwo));
/*
notes was going the route of doing two four loops but i dont think i need to do that... all i really 
need to do is put all the values into one array and check to see if there are duplicates.  
i think this is the right way of thinking about it
    */

