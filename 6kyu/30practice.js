const arr = [1,2,2,3,3,3,4];

const counts = {};

for (const num of arr) { 
if (counts[num]) {
    counts[num] += 1;
} else {
    counts[num] = 1;
}
}

console.log(counts);
