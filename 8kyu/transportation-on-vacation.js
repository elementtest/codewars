//calculatate total price based on days of vacation give discounts
function rentalCarCost(d) {
  // Your solution here
  let costone = ((d * 40) - 50);
  let costtwo = ((d * 40) - 20);
  let origcost = (d * 40)

if (d >= 3 && d <= 6  ) {
  return costtwo
} else if (d >= 7) {
  return costone
} else {
  return origcost
} 
  
 
  
}