// calculates the area of a rectangle
let length = 20;
let width = 22;
let area = length * width ; 
console.log("The area of the rectangle is : " +area);

// compares two numbers
let number1 = 15;
let number2 = 25;

if (number1 === number2) {
    console.log("The Numbers are Equal");
} else {
    console.log("The Numbers are not Equal");
} 

// check even or odd number
var num = 313;
if (num % 2 === 0) {
    console.log("The number is Even");
} else {
    console.log("The number is Odd");
}

// Discount calculator
let purchaseAmount = 7000;
let discount = 0;

if (purchaseAmount < 1000) {
    discount = 0.10;
} else if (purchaseAmount >= 1000 && purchaseAmount <= 5000){
    discount = 0.20;
} else if (purchaseAmount >= 5000) {
    discount = 0.30;
}

let discountAmount = purchaseAmount - (purchaseAmount * discount);
console.log(discountAmount);

// Checking Positive or Negative or zero
var num = 0;

if (num > 0) {
    console.log("The Number is Positive");
} else if (num < 0) {
    console.log("The Number is Negative");
} else {
    console.log("The Number is Zero");
}
