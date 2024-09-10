let s = "asdjkflajsfklasdjfkladsfjkaldsfjasdklfjdsaklfuewriuqioejiqo";
function printerError(s) {
    let rr = s.match(/[^a-m]+/gi)
    if (rr === null) {
        return `0/${s.length}`;
    } else {
        return `"${rr.length}/${s.length}"`
    }
    //return `"${rr.length}/${s.length}"`;


}

console.log(printerError(s))
