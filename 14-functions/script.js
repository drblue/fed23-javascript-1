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

// console.log("I am before");
// greetUser("Johan", "morning");
// greetUser("Pelle");
// greetUser();
// console.log("I am after");

// let username = "Johan";
// const sayHi = function(username) {
// 	username = username.toUpperCase();
// 	console.log(`Hi ${username}`);
// }

// sayHi(username);
// console.log(username);

/*
const calcBoxCircumference = function(width, height) {
	return width * 2 + height * 2;
}

// Arrow Function
const calcBoxArea = (width, height) => {
	return width * height;
}

// let sum1 = calcBoxCircumference(20, 40);    // let sum1 = 120
// let sum2 = calcBoxCircumference(30, 60);
// console.log("sum1", sum1);
// console.log("sum2", sum2);

const w = 20;
const h = 40;
const ci = calcBoxCircumference(w, h);   // calcBoxCircumference(20, 40)
if (ci > 100) {
	console.log("Thats a big box");
} else {
	console.log("smol box");
}

console.log("Circumference of box with height 20 and width 40 is:", calcBoxCircumference(40, 20));
*/

// Callbacks
const logToConsole = (txt) => {
	console.log(txt);
}

const nagUser = (txt) => {
	alert(txt);
}

const makeMoreInteresting = (msg, callback) => {
	const interesting = msg + "!!!!!!!!!!!!!!";
	callback(interesting);
}

// makeMoreInteresting("JavaScript", logToConsole );

makeMoreInteresting("OMG OMG OMG", (txt) => {
	console.log(txt);
} );

let students = ["Johan", "Pelle", "Börje", "Kajan", "Tiffany"];

/*
for (let i = 0; i < students.length; i++) {
	const student = students[i];
	console.log("Student's name is:", student);
}
*/

students.forEach( (student, index) => {
	console.log(`Student at position ${index} is ${student}`);
} );
