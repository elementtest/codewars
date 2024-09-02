/*
given two strings, spit out a string of the unique (non repeating) individual characters from 
both of the strings
    */
function longest(s1, s2) {
    let neww = s1 + s2;
    let unique = [];
    for (let i = 0; i < neww.length; i++) {
        if (!unique.includes(neww[i])) {
            unique.push(neww[i])
        }

    }
    return unique.sort().join('');
}
console.log(longest('lkjhlkhlkjhhlkjhlkhjlhlk', 'lkjhklhjkljhhjlkhjklh'));

