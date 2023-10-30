/**
 * Arrays
 */

let points = [1, 42, 1337, 999];
let students = [
	"Deadpool",
	"Black Widow",
	"Iron Man",
	"Spider-Man",
];

console.log("Students:", students);
console.log("The second student's name is:", students[1]);

console.log(`We have ${students.length} students in our class.`);

students[1] = "Black Window";
console.log("The second student's name after change is:", students[1]);

/**
 * Non-desctructive methods
 */

// Join all items in an array to a string
let names = students.join(", ");
console.log("The students names are:", names);

// Find position (index) of string "Iron Man"
console.log("Index of Iron Man:", students.indexOf("Iron Man"));  // 2
console.log("Index of Thanos:", students.indexOf("Thanos")); // -1

// Concatenate two arrays together
/*
let friends = [
	"Batman",
	"Superman",
	"Green Lantern",
	"Joker",
	"Harley Quinn",
];
let mashup = students.concat(friends);
console.log("MASHUP!!!!!!!!!!!!", mashup);
*/

/**
 * Destructive methods
 */

// Add "Wanda" to the end of student list
students.push("Wanda");
console.log("The students names are:", students.join(", "));

// Add "Thanos" and then remove "Thanos" because he was not nice
students.push("Thanos");	// Push in a string at the end of the array
students.pop();				// Remove the last item in the array
students.shift();			// Remove the first item in the array
students.unshift("Hulk");	// Add a string to the start of the array
