// every second number in an array needs to be doubled 
function doubleEveryOther(a) {
    return a.map((numm, index) => {
        return index % 2 !== 0 ? numm * 2 : numm;
    })
}
