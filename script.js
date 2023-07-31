let js = "Amazing";

//console.log(213 + 4 + 3 - 234);
const now = 2023;
const ageOskar = now - 1997;
const ageSanti = now - 1995;
console.log(ageOskar, ageSanti);

// console.log(ageOskar * 2, ageSanti / 10, 3 ** 3);
// 3 ** 3 means 3 to the power of 3 = 3 * 3 * 3 = 27.

//Contatinate two variables
const firstName = "Oskar";
const lastName = "Almgren";
// console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // Previous answer of (15) x reassigns to + 10. So x + 10 = 25
x *= 4; // X is now 25 so this will be x * 4 = 100
x++; //++ means +1, so in this case x + 1 = 101
x--;
x--; //-- means -1
// console.log(x);

// Comparison operators
console.log(ageOskar < ageSanti);
// Boolean result either true or false
// > Greater than, < Less than, >= Greater than or equal, < Less than or equal.

console.log(ageOskar >= 18); // This is also gives a result (True).

const isFullAge = ageOskar >= 18;
console.log(isFullAge); // This is true

console.log(now - 1997 > now - 1995);
