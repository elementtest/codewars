let n = 1234;
function digitalRoot(n) {
    n = n.toString();
    n = n.split('');
    let countt = 0;
    if (n.length >= 2) {
        for (let i = 0; i < n.length; i++) {
            n[i] = Number(n[i]);
            n[i] += countt;
            return countt;
        }
    }
}

console.log(digitalRoot(n));
