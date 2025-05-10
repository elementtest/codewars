/*
input: number of floors
output: asterisk
(surrounded by equal amount of whitespace on each side.)

['     *     '] // hit space bar five times
['    ***    '] // hit space bar four times
['   *****   '] // hit space bar three times
['  *******  '] // hit space bar twice
[' ********* '] // hit space bar once
['***********'] // hit space bar zero times

*/

function towerBuilder(nFloors) {
    let spacee = 5;
    let astr = 1;
    let arr = [];
    for (let i = 0; i < nFloors; i++) {
        arr.push(('"' + " ".repeat(spacee)) + ("*".repeat(astr)) + (" ".repeat(spacee)) + '"') 
        spacee -= 1;
        astr += 2;
    }
    return arr.join(",\n");

}


console.log(towerBuilder(6));

/*
what's the relationship from top and with each successive floor number?  
1st floor: 1... 2nd floor: 3.... 3rd floor: 5 .... 4th floor: 7 ... 5th floor: 9... 

so starts at one and then adds 2 every time 
*/
