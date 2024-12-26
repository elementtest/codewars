/*
count the number of repeating letters in a string
*/
let str = 'aabbcde';
function countRepeat(str) {
    str = str.toLowerCase().split('').sort();
    console.log(str);
    let initt = str[0];
    let countt = 0;
    let timm = 0;
    for (let i = 1; i < str.length; i++) {
        if (initt === str[i]) {
            if (timm === 0) {
                countt++;
                timm++;
            }
            
        } else {
            initt = str[i];
            if (timm === 1) {
                timm--;
            }
        }
        }
    return countt;
    
        }


console.log(countRepeat(str));
/*
function duplicateCount(text){
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
}
*/
