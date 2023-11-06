/**
 * Truthy/falsy
 *
 * falsy values in JavaScript
 * - 0
 * - ""
 * - null
 * - undefined
 * - NaN
 */

/*
let username = "false";
if (!username) {
	username = "anonymous visitor";
}

let msg = `Welcome ${username}`;
console.log(msg);
*/

/**
 * Ternary Operator
 */

/*
let username = "pelle";
let msg;

if (username) {
	msg = "You have a name, wow!";
} else {
	msg = "Y U HAS NO NAME?!!!";
}
*/

let username = "";
let msg = (username)
	? "You have a name, wow!"
	: "Y U HAS NO NAME?!!!";

console.log(msg);
