//find growth target of a population
function nbYear(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        p0 = Math.floor(p0 * (a + percent / 100) + aug)
        years++;
    }
    return years
}
