/**
 * Functions 101
 *
 */

/**
 * Function Declaration
 */

// function greet() {
// 	alert("Hello from a function!");
// 	console.log("Hello from a function!");
// }

/*
function greetUser(username, time = "day") {
	console.log(`Good ${time}, ${username}`);
}

greetUser("Johan", "morning");
greetUser("Pelle");
greetUser();
*/

/**
 * Function Expression
 */
const greetUser = function(username, time = "day") {
	console.log(`Good ${time}, ${username}`);
}

console.log("I am before");
greetUser("Johan", "morning");
greetUser("Pelle");
greetUser();
console.log("I am after");
