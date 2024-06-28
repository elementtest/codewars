//
//Find the Difference in Age between Oldest and Youngest Family Members
//return an array with max age, min age and age diff
function differenceInAges(ages){
  let max = ages[0];
  let min = ages[0];
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] > max) {
      max = ages[i]
    }
    if (ages[i] < min) { 
    min = ages[i]
    }
  }
  //end for loop
  let diff = (max - min);
  let finalArray = [];
  finalArray.push(min, max, diff)
  return finalArray
}
