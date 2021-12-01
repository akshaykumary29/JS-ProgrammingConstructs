// reads 5 Random 2 Digit values then find their sum and the average.

let diceNumber1 = Math.round(Math.random() * 89 + 10);
console.log("First dice value is: " + diceNumber1);
let diceNumber2 = Math.round(Math.random() * 89 + 10);
console.log("Second dice value is: " + diceNumber2);
let diceNumber3 = Math.round(Math.random() * 89 + 10);
console.log("Third dice value is: " + diceNumber3);
let diceNumber4 = Math.round(Math.random() * 89 + 10);
console.log("Fourth dice value is: " + diceNumber4);
let diceNumber5 = Math.round(Math.random() * 89 + 10);
console.log("Fifth dice value is: " + diceNumber5);

let diceSum = diceNumber1 + diceNumber2 + diceNumber3 + diceNumber4 + diceNumber5;
console.log("The Sum of five dice numbers are: " + diceSum);
console.log("The Average is: " + diceSum / 5);