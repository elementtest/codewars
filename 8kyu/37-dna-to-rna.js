//given DNA convert to RNA only difference is T converted to U
function DNAtoRNA(dna) {
  if (dna.length === 0) { return ""};
  
  let rna = "";
  
  for (let i = 0; i<dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }
 return rna; 
}
/* 
GOD's SOLUTION
function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}
teplace method is used to replace specified values in a string

/T/g
regular expression matches ALL (global aka g) occurences of the T in the string

and then replacing that with a U
*/
