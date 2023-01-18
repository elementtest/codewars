//given an array of ten games between a home team and an opposing team calculate the score at the end. win = +3 pts.  loss = o points. tie = 1 point

function points(games) {
    let score = 0;
    for (i=0; i<games.length; i++) {
      let newStr = games[i].toString();
      let x = newStr.charAt(0);
      let y = newStr.charAt(2);
        if (x > y) {
          score += 3;
        } else if (y > x) {
          score += 0;
        } else {
          score += 1;
    }

  }
  return scor