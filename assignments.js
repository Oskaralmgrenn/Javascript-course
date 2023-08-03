//

// Strings and template literals

// const firstName = "Oskar";
// const birthYear = 1997;
// const job = "programmer";
// const year = 2023;

// const oskar =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

// console.log(oskar);

// // Template literals makes it easier for you to write sting scentences

// const oskarNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

// console.log(oskarNew);

// console.log(`Just a normal string...`);

// console.log(
//   "String\n\
// with\n\
// multiple\n\
// lines"
// );

// console.log(`String
// with
// multiple
// lines`);

// Taking decisions and if/else statements

const age = 15;
//const isOldEnough = age >= 18; //Not needed. Just write this value in the if statement instead

if (age >= 18) {
  console.log(`Oskar can start taking his driverslicense 🏎`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Oskar is too young, wait another ${yearsLeft} years`);
}

const birthYear = 1997;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
