//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade (s1, s2, s3) {
  summ = ((s1 + s2+ s3)/3);
  if (summ >= 90) {
    return 'A';
  } else if (summ >= 80) {
    return 'B';
  } else if (summ >= 70) {
    return 'C';
  } else if (summ >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}