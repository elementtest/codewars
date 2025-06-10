const sentence = ['go', 'please', 'fudge', 'yourself', 'shizz', 'great', 'boom'];

const badWords = ['fudge', 'shizz', 'boom'];

//check if the sentence has fudge in it and if so replace with "BADWORD"

const cleanSent = sentence.map(word => badWords.includes(word) ? 'BADWORD' : word).join(' ');

console.log(cleanSent);
