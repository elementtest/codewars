/*
convert last 4 digits of a number to hashes #
    */
let cc = '4583299548357'
function maskify(cc) {
    let lngth = cc.length;
    return cc.split("")
    .map((element, index) => {
        return index === lngth-1 ? "#" : index === lngth-2 ? "#" : 
            index === lngth-3 ? "#" : index === lngth-4 ? "#" : element;
    })
    .join("")

}

console.log(maskify(cc));
