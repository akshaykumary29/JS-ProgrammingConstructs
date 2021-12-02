// Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const prompt = require(`prompt-sync`)();

let number = Number(prompt("Enter a number: "));

switch (number) {
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    default:
        console.log("Invalid");
}