/**
 * Control Flow 👮🏽🎛✋🏻
 */

const minAge = 18;
const maxAge = 65;

let age = 42;

/**
 * LOGICAL OPERATORS
 *
 * && = AND (both sides has to be true)
 * || = OR (at least one side has to be true)
 */

/*
//    42 >= 18    &&    42 <= 65
//     true       &&      true
//               true
if (age >= minAge && age <= maxAge) {
	// true
	console.log("Access granted!");
} else {
	// false
	console.log("🛑 You're either too young or too old!");
}

let username = "johan";
//   "johan" === "dave" ||  "johan" === "johan"
//          false       ||          true
//                     true
if (username === "dave" || username === "johan") {
	console.log(`I'm sorry ${username}, I can't open the doors.`);
} else {
	console.log("Welcome!");
}

// More advanced if-statement
if (age >= minAge && age <= maxAge) {
	console.log(`You are between ${minAge} and ${maxAge} years old, congrats!`);
} else if (age < minAge) {
	console.log("Too young! 👶🏻");
} else {
	console.log("Too old for this shit! 👵🏻");
}

console.log("Program ended.");
*/

/**
 * for-loop
 */
/*
console.log("Yay, starting loop...");

const maxLoops = 10;

for (
	let i = 0;     // start value of i
	i < maxLoops;  // continue looping while this expression is true
	i++            // after each loop (iteration), do this
) {
	// here be loop
	console.log("We're looping 🥵, at loop number:", i);
}

console.log("🤢");
*/

let students = [
	"Deadpool",		// 0
	"Black Widow",	// 1
	"Iron Man",		// 2
	"Spider-Man",	// 3
	"Wanda",		// 4
	"Thanos",		// 5
];

console.log("Class of 2023:");
for (let i = 0; i < students.length; i++) {
	console.log(`Student at index ${i} is: ${students[i]}`);
}
console.log(`Number of students: ${students.length}`);
