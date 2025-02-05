/*
given a string turn it into camelCase
i.e.
the-golden-warrior
--->
theGoldenWarrior
*/

function toCamelCase(str) {
    let result = str.split(/[-_]/).map((word, index) => {
        if (index !== 0) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }

    }
}
    

console.log(toCamelCase("the-golden-warrior"));

