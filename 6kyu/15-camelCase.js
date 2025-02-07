/*
given a string turn it into camelCase
i.e.
the-golden-warrior
--->
theGoldenWarrior
*/

function toCamelCase(str) {
    let resultt = str.split(/[-_]/);

    resultt = resultt.map((word, idx) => {
        if (idx !== 0) {
            return word[0].toUpperCase() + word.slice(1);
        }
        return word;
    })
    return resultt.join('');
}

console.log(toCamelCase('the_stealth_warrior'));
