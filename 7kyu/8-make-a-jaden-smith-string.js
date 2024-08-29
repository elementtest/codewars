// Jaden Smith will smiths celebrity son likes to capitalize the first letter of every... word
// given a string, do the same thing

String.prototype.toJadenCase = function () {
    return this.split(" ")
    .map(dubb => {
        let capitalizedStr = dubb.charAt(0)
        .toUpperCase() + dubb.slice(1);
        return capitalizedStr;
    })
    .join(" ");
}
