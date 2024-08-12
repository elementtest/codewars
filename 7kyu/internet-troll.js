// given a string
// return the string without any vowels in it.  
let str = "this website is for losers LOL";
function disemvowel(str) {
    str = str.split("");
    let bigvowels = "AEIOU";
    let vowels = "aeiou";
    let commonElements = str.filter(letter => (!vowels.includes(letter) && (!bigvowels.includes(letter))));
    commonElements = commonElements.join("");
    console.log(commonElements);
}
/*
split the string to make it into an array
declare a string of capital and lower case vowels 
let commonelements... equal to the string and filter it based on letter and check for 
A NEGATIVE condition
IT IS NOT ! included in the vowels string
!vowels.includes(letter)
&&
IT IS NOT ! included in the bigvowels string
!bigvowels.includes(letter)

join the elements of the array back together to fomr a string again.  

return the string without the vowels. 
    */



disemvowel(str);
