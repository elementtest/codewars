//isogram is  a word that has no repeating letters consecutive or non consecutive ... implement a function 
// that determines whether or not a word is an isogram 

let str = "abba"

function isIsogram(str) {
    let compstr = [];
    str = str.split("");

    for (let i = 0; i < str.length; i++) {
        if (compstr.includes(str[i].toLowerCase())) {
            return false;
        } else {
            compstr.push(str[i].toLowerCase());
        }
    }
    return true;
}

console.log(isIsogram("asdf"));

/*
so it adds it to a seperate array each time.  first time is a, second time is b, third time is c 

i do need to create another for loop that runs on the second iterations so i think thats right... 
so first iteration
added variable = a
comp str = a

second iteration 
added variable = b
comp str= ab

*/
