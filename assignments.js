// //

// // Strings and template literals

// // const firstName = "Oskar";
// // const birthYear = 1997;
// // const job = "programmer";
// // const year = 2023;

// // const oskar =
// //   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

// // console.log(oskar);

// // // Template literals makes it easier for you to write sting scentences

// // const oskarNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

// // console.log(oskarNew);

// // console.log(`Just a normal string...`);

// // console.log(
// //   "String\n\
// // with\n\
// // multiple\n\
// // lines"
// // );

// // console.log(`String
// // with
// // multiple
// // lines`);

// // // Taking decisions and if/else statements

// // const age = 15;
// // //const isOldEnough = age >= 18; //Not needed. Just write this value in the if statement instead

// // if (age >= 18) {
// //   console.log(`Oskar can start taking his driverslicense 🏎`);
// // } else {
// //   const yearsLeft = 18 - age;
// //   console.log(`Oskar is too young, wait another ${yearsLeft} years`);
// // }

// // const birthYear = 1997;

// // let century;

// // if (birthYear <= 2000) {
// //   century = 20;
// // } else {
// //   century = 21;
// // }

// // console.log(century);

// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

// Note: Don't round the BMI values. Leave them as they are.

// Solution:

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

if (BMIJohn < BMIMark) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
}
