/**
 * TypeScript with Vite ✍🏻📜🏎️💨
 *
 */

/**
 * Explicit typing
 */
let myString: string;
myString = "Hello, world!";

let myNumber: number;
myNumber = 1337;

let myBoolean: boolean;
myBoolean = true;

/**
 * Implicit typing
 */
let myName = "Johan";

/**
 * Function parameter typing
 */
const greet = (username: string, age: number) => {
	console.log(`Hello, ${username}! You are ${age} years old.`);
}
greet("Johan", 25);
greet("Pelle", 3);
// greet(["lol"]);

const greet2 = (username: string, age?: number) => {
	if (!age) {
		console.log(`Hello, ${username}!`);
		return;
	}
	console.log(`Hello, ${username}! You are ${age} years old.`);
}
greet2("Alice");
greet2("Bob", 42);
// greet2("Charlie", null);  // even though parameter 2 is optional, it still has be a number if used

const greet3 = (username = "anonymouse", age?: number) => {
	if (!age) {
		console.log(`Hello, ${username}!`);
		return;
	}
	console.log(`Hello, ${username}! You are ${age} years old.`);
}

greet3();
greet3("hangry");
greet3(undefined, 3);
