let myName = "Mr Lam";
const myAge = 18;  // constant, cannot be changed
let myPhone = 1234567;
myPhone = 7654321;
let myArr = [1, 2, 3, 4, 5, 6];
let isHuman = true;

console.log(myName);
console.log(myAge);
console.log(myPhone);
console.log(myArr);
console.log(isHuman);

// Playing with numbers
let a = (5 + 7) * 2;
let b = (5 - 7) / 3;
let c = 5 ** 7; // power
let d = 123 % 45;  // remainder
console.log(a, b, c, d);

let e = Math.random();
let f = Math.round(123.45678);
let g = Math.cos(Math.PI);
let h = Math.E ** 2;
console.log(e, f, g, h);


// Playing with strings
let firstName = "Andrew";
let lastName = "Tay";
let fullName = firstName + " " + lastName;
let nameLength = fullName.length;
console.log(fullName + ", Length = " + nameLength);

let language = "JavaScript";
console.log(language[0]);
console.log(language.substring(2, 5));
console.log(language.toUpperCase());

// if... else
let age = 20;

if (age <= 12) {
    console.log("Hello kid!");
}
else if (age <= 18) {
    console.log("Hello teen!");
}
else {
    console.log("Hello adult");
}


// For loop
let fruits = ["orange", "apple", "pear", "watermelon"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// while loop
let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}
console.log("Happy New Year!");

