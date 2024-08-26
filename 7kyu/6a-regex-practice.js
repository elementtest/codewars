let sturr = "aaoaoo"
function XO(sturr) {
    let x = sturr.match(/a/gi);
    let o = sturr.match(/o/gi)
    console.log((x && x.length) === (o && o.length))
}
XO(sturr);
