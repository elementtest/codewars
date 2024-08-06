/*


You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []


*/

function myLanguages() {
    const results = {"Java": 10, "Ruby": 80, "Python": 65}
    const threshold = 60;
    const finalresult = Object.keys(results)
        .filter(key => results[key] >= threshold)
        .sort((a, b) => results[b] - results[a]);
    console.log(finalresult);
}
myLanguages();
/*
so you have your object and it has key : value pairs inside of it.  
set a variable with the requirement of what they need to past

TO GET THE VALUES INSIDE THE OBJECT USE Object.keys(WHATEVER OOBJECT NAME)
*/

