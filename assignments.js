//

// Strings and template literals

const firstName = "Oskar";
const birthYear = 1997;
const job = "programmer";
const year = 2023;

const oskar =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(oskar);

// Template literals makes it easier for you to write sting scentences

const oskarNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(oskarNew);

console.log(`Just a normal string...`);

console.log(
  "String\n\
with\n\
multiple\n\
lines"
);

console.log(`String
with
multiple
lines`);
