// Take a command-line argument n and print a table of powers of 2 that are less than or equal to 2^n

const prompt = require(`prompt-sync`)();

let number = Number(prompt("Enter a number: "));

for (let index = 0; index < number; index++) {
    console.log(`${Math.pow(2,index)}`);
}