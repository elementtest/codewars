// given a traffic light, return the next color
function updateLight() {
    switch (current) {
        case 'green':
            return 'yellow';
        case 'yellow':
            return 'red';
        case 'red':
            return 'green';
        default:
            return 'invalid color';
    }
}
/* 
function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

*/
