// To read 5 Random 3 Digit values and then outputs the minimum and the maximum value

let number1 = Math.round(Math.random() * 899 + 100);
let number2 = Math.round(Math.random() * 899 + 100);
let number3 = Math.round(Math.random() * 899 + 100);
let number4 = Math.round(Math.random() * 899 + 100);
let number5 = Math.round(Math.random() * 899 + 100);

console.log("Numbers are: " + number1 + " " + number2 + " " + number3 + " " + number4 + " " + number5);

let maximum = number1;
let minimum = number1;

    if (number2 > maximum) 
        maximum = number2;
    else
        minimum = number2;
    if (number3 > maximum)
        maximum = number3;
    else 
        minimum = number3;
    if (number4 > maximum)
        maximum = number4;
    else
        minimum = number4;
    if (number5 > maximum)
        maximum = number5;
    else
        minimum = number5;
        
console.log("Maximum number is: " + maximum + "  Minimum number is: " + minimum);
