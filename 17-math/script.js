/**
 * Math 🧮
 *
 * .random() - Gets a random number between 0 - 0.999999999999
 * .round() - Round a floating number to nearest integer
 * .floor() - Round a floating number DOWN to nearest integer
 * .ceil() - Round a floating number UP to nearest integer
 *
 */

let randomNumber = Math.random();  // 0.00000 - 0.999999999999
let randomNumberMultiplied = randomNumber * 10;  // 0 - 9.99999999999
let roundedRandomNumberMultipled = Math.round( randomNumberMultiplied );  // 0 - 10
let ceiledRandomNumberMultipled = Math.ceil( randomNumberMultiplied );  // 1 - 10

// Generates a random number between 1-10
const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}

/*
let numbers = [];
for (let i = 0; i < 20; i++) {
	numbers.push( getRandomNumber() );
}

console.log(numbers);
*/

let numberToGuess = getRandomNumber();

let guess = prompt("Guess a number", 5);
console.log("Your guess is:", guess);
