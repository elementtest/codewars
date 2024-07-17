function paperwork() {
    let n = Math.floor(Math.random()*100) + 1;
    let m = Math.floor(Math.random()*100) + 1;
    console.log(`n is ${n} and m is ${m}`);
    return (n < 0 || m < 0) ? 0 : (n * m);
}
console.log(paperwork());
