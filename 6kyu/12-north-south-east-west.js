/*
given an array of cardinal directions north, south, east, west... decide first whether it takes exactly ten minutes to complete and second if it returns you to the start point.
*/

let walk = ['e','w','e','w','s','n', 's', 'n', 's', 'n'];
function isValidWalk(walk) {
    let measure = 0;
    let minutes = 0;

    for (let i = 0; i < walk.length; i++) {
        console.log(walk[i]);
        switch (walk[i]) {
            case 'n': 
                measure += 1;
                minutes += 1;
                break;
            case 's': 
                measure -= 1;
                minutes += 1;
                break;
            case 'e':
                measure += 0.5;
                minutes += 1;
                break;
            case 'w':
                measure -= 0.5;
                minutes += 1;
                break;
            default: 
                console.log('not a proper direction');
        }
    }
    console.log(measure);
    console.log(minutes);
    return (measure === 0 && minutes === 10) ? true : false;
}

console.log(isValidWalk(walk));

