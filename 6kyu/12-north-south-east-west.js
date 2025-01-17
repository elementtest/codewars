/*
given an array of cardinal directions north, south, east, west... decide first whether it takes exactly ten minutes to complete and second if it returns you to the start point.
*/

let walk = ['e','w','e','w','s','n'];
function isValidWalk(walk) {
    let ns = 0;
    let ew = 0;
    let minutes = 0;

    for (let i = 0; i < walk.length; i++) {
        minutes += 1;
        console.log(walk[i]);
        switch (walk[i]) {
            case 'n': 
                console.log('nnnn');
            case 's':
                console.log('ssss');
            case 'e':
                console.log('eeeee');
            case 'w':
                console.log('wwww');
        }
        console.log(`ns is now ${ns}`);
    }
    console.log(`ns is ${ns}, ew is ${ew}, minutes is ${minutes}`)
}

console.log(isValidWalk(walk));
