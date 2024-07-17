function paperwork() {
    let sign = Math.random() > 0.5 ? -1 : 1;
    let n = ( ( Math.floor(Math.random()*100) + 1) * sign ) ;
    let m = ( Math.floor(Math.random()*100) + 1) * sign ;
    console.log(`n is ${n} and m is ${m}`);
    return (n < 0 || m < 0) ? 0 : (n * m);
}
console.log(paperwork());
this is a sentence
