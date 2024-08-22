/*
goal is bellow... capitalize first lettter repeat it Nth times(according to array) then add a hyphen 
in between each group
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
    */
let s = "RqaEzty";
function capitalizeAdd(s) {
    let resultt = "";
    for (let i = 0; i < s.length; i++) {
        resultt +=  s[i].toUpperCase();
        for (let j = 0; j < i; j++) {
            console.log('this is the repeat letter : ' + i + " " + s[i])
            resultt += s[i].toLowerCase();
        }

        if (i < s.length - 1) {
            console.log('this is where in the array the hyphen is added: ' + i);
            resultt += "-";
        }
            
        }
    return resultt;
}
    
    

console.log('final result: ' + capitalizeAdd(s));


