const ZeroFuel = (distancetoPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distancetoPump) {
    return true;
  } else {
    return false;
  }
};

console.log(ZeroFuel(50, 25, 2));

/*
  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft;
  }
  */
