function wrappingPaper(boxes) {
  // body
  let total = 0;
  for (let i = 0; i < boxes.length; i++) {
    let l = boxes[i][0];
    let w = boxes[i][1];
    let h = boxes[i][2];

    let smallSide = boxes[i].sort((a, b) => a -b);
    let smallOne = smallSide[0];
    let smallTwo = smallSide[1];
    let smallArea = smallOne * smallTwo;
    let surfaceArea = 2 * (l * w + l * h + w * h);
    console.log(surfaceArea);
    total += surfaceArea;
    total += smallArea;
  }
  return total;
}

wrappingPaper([
  [2, 3, 4],
  [9, 1, 8],
  [5, 3, 18],
]);

/*
function wrappingPaper(boxes) {
  return boxes.reduce((sum, [l,w,h]) => sum + 2 * (l*w + l*h + w*h) + Math.min(l*w, l*h, w*h), 0)
}
  */
