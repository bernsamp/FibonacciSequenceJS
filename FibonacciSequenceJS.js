const prompt = require("prompt-sync")({sigint:true});

const userInput = parseInt(prompt('Enter the number of terms: '));

let n1 = 0;
let n2 = 1;
let nextTerm;

console.log(`The first ${userInput} numbers of the Fibonacci Sequence are: `);

for (let i = 1; i <= userInput; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}