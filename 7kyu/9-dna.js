/*
given a list of dna sequences take it and takes one side of the dna and returns the other complementary side
    */
let dna = "TAATCGGC"
function dnaStrand(dna) {
    return dna.split("")
    .map(dubb => {
        return dubb === "T" ? "A" : dubb === "A" ? "T" : dubb === "C" ? "G" : dubb === "G" ? "C" : "dubb";
    })
    .join("");
}
console.log(dnaStrand(dna));
