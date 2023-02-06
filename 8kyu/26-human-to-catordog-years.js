//take input of human years and convert it to cat or dog years first year is + 15 next is + 9 and subsequent is 4 or 5 depending on cat or dog
var humanYearsCatYearsDogYears = function (humanYears) {
  var cCount = 1;
  var cCat = 0;
  var cDog = 0;
  for (let i = 0; i < humanYears; i++) {
    if (cCount === 1) {
      cCount += 1;
      cCat = 15;
      cDog = 15;
    } else if (cCount === 2) {
      cCount += 1;
      cCat = cCat + 9;
      cDog = cDog + 9;
    } else {
      cCount += 1;
      cCat = cCat + 4;
      cDog = cDog + 5;
    }
  }
  return [humanYears, cCat, cDog];
};