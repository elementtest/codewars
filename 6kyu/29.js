function high(x) {
    let highScore = 0;
    let stringg = x.split(' ')
    let maxWord = '';
    for (let i = 0; i < stringg.length; i++) {
        let thisWord = 0;
        for (let j = 0; j < stringg[i].length; j++) {
            thisWord += (stringg[i].charCodeAt(j) - 96);
        }
        if (thisWord > highScore) {
            highScore = thisWord;
            maxWord = stringg[i];
        }
    }
    console.log(typeof(maxWord));

    return (`the highest score is ${highScore} with word ${maxWord}`);

}


console.log(high('the quick brown fox jumps over the lazy zzzzzzzzzzz'));
