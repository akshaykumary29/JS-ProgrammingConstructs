// Perform arithmetic operations and find max, min

const prompt = require('prompt-sync')();

let a = prompt("Enter first number : ");
let b = prompt("Enter second number : ");
let c = prompt("Enter third number : ");

let operation1 = a + b * c;
let operation2 = a % b + c;
let operation3 = c + a / b;
let operation4 = a * b + c;

// let maximum = Math.max(operation1, operation2, operation3, operation4);
// let minimum = Math.min(operation1, operation2, operation3, operation4);

console.log("Result 1 = " + operation1);
console.log("Result 2 = " + operation2);
console.log("Result 3 = " + operation3);
console.log("Result 4 = " + operation4);

let maximum;
let minimum;

if (operation1 < operation2 && operation1 < operation3 && operation1 < operation4) {
    minimum = operation1;
} else if (operation2 < operation1 && operation2 < operation3 && operation2 < operation4) {
    minimum = operation2;
} else if (operation3 < operation1 && operation3 < operation2 && operation3 < operation4) {
    minimum = operation3;
} else {
    minimum = operation4;
}

if (operation1 > operation2 && operation1 > operation3 && operation1 > operation4) {
    maximum = operation1;
} else if (operation2 > operation1 && operation2 > operation3 && operation2 > operation4) {
    maximum = operation2;
} else if (operation3 > operation1 && operation3 > operation2 && operation3 > operation4) {
    maximum = operation3;
} else {
    maximum = operation4;
}

console.log("Maximum is : " + maximum);
console.log("Minimum is : " + minimum);