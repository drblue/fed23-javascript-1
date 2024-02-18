// Detta visar en alert-ruta på webbsidan
// alert("Hej från script.js!");
// alert("I AM HANGRY!!!!!!!!!!!!!!!!");

// Skriver ut ett meddelande till webbläsarens konsol
// console.log("Hej från script.js!");
// console.log("Hej igen från script.js!");

/*
let msg;
msg = "Hej från msg!";

console.log(msg);
console.log(msg);

msg = "Hej igen från msg!";

console.log(msg);
*/

// let first_name = "Johan";

/*
// Naming Conventions

// Camel Case
camelCase

// Snake Case
snake_case

// Upper Camel Case
UpperCamelCase
PascalCase

// Kebab Case / BBQ Case
kebab-case
bbq-case
*/

/*
let firstName = "Johan";
console.log(firstName);

firstName = "Pelle";
// console.log(firstName);

const middleName = "Bengt";

const lastName = "Nordström";
console.log(lastName);

console.log(firstName + middleName + lastName);   // "PelleBengtNordström"
console.log("Pelle" + "Nordström");

console.log(firstName + " " + lastName);   // "Pelle Nordström"
console.log("Pelle" + " " + "Nordström");   // "Pelle Nordström"

let fullName = firstName + " " + lastName;
console.log("Your name is: " + fullName);

// String Properties
console.log("The length of your full name is: " + fullName.length);

// String Methods
console.log("Your full name (but screaming): " + fullName.toUpperCase());
console.log("Your full name (but whispered): " + fullName.toLowerCase());
console.log("The first char of your name is: " + fullName[0]);

console.log("The first 'e' exists at index: " + fullName.indexOf("e"));

let newName = fullName.replace("Pelle", "Alicia");    // case sensitive
console.log("New name: " + newName);
console.log("Your (old) name is: " + fullName);

let palle = fullName.replace("e", "a");  // replaces only first occurance
console.log("Palle's name is: " + palle);

// "Pelle"
//  01234
let partOfPelle = firstName.slice(1, 3); // "el"
console.log("Part of Pelle: " + partOfPelle);

let alsoPartOfPelle = firstName.substring(1, 3); // "el"
console.log("Also part of Pelle: " + alsoPartOfPelle);

let morePartsOfPelle = firstName.substring(1); // "elle"
console.log("Also part of Pelle: " + morePartsOfPelle);
*/

let email;
email = "jn@thehiveresistance.com"; // ska returnera 20 + 'com'
email = "some@dude.org"; // ska returnera 9 + 'org'
email = "bgates@microsoft.com"; // ska returnera 16 + 'com'
email = "some.brittish.dude@bt.co.uk"; // ska returnera 24 + 'uk'
console.log("Email is: " + email);

// Hitta sista punkten i variabeln `email` och skriv ut till console
// Ska fungera oavsett vad för värde `email` har, utan att behöva ändra koden
// "The last dot for email EMAIL is at index: 42"
let indexOfLastDot = email.lastIndexOf(".");
console.log("The last dot for email is at index: " + indexOfLastDot);

// Med hjälp av föregående kod, ta ut allting EFTER sista punkten i
// `email` och skriv till console
// "The top domain for email EMAIL is: DOMAIN"
console.log("The top domain for email is: " + email.slice(indexOfLastDot + 1));
