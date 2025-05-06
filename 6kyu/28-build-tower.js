/*
input : given a certain # of floors
output : a tower made of asterisks ' * ' increasing in size with each floor starting from top
*/

function towerBuilder(nFloors) {
    let arr = ['*'];
    let countt = 1;
    for (let i = 0; i < nFloors; i++) { 
        countt += 2;
        

        }
    return arr;

}


console.log(towerBuilder(3));

/*
what's the relationship from top and with each successive floor number?  
1st floor: 1... 2nd floor: 3.... 3rd floor: 5 .... 4th floor: 7 ... 5th floor: 9... 

so starts at one and then adds 2 every time 

*/
