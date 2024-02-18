/**
 * Higher Order Array Methods
 *
 * .sort() <--
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

/*
// names
const names = ["Johan", "Kim", "Alicia", "Maja", "Elliot"];
console.log("Names in chaos:", names);

// Sort array alphabetically
names.sort();
console.log("Names in alphabetical (proper) order 🤩:", names);

// reverse order
names.reverse();
console.log("Names in reverse alphabetical order 🤩:", names);
*/

// numbers
// const numbers = [ 47, 5, 21, 50, 28, 18, 47, 13, 24, 8, 18, 15, 11, 43, 7, 102, 1337, 33, 52 ];
// console.log("Numbers in chaos:", numbers);

// sort numbers (won't sort numerically!)
// numbers.sort();
// console.log("Numbers in proper? order:", numbers);

// sort numbers NUMERICALLY
// numbers.sort( (a, b) => {
// 	// shorter version of the logic below
// 	return (a - b);

// 	/*
// 	console.log("comparing a vs b", a, b);

// 	// if a is less than b (i.e. a should be sorted BEFORE b)
// 	if (a < b) {
// 		console.log("a is less than b");
// 		return -1337;
// 	}

// 	// if a is greater than b (i.e. a should be sorted AFTER b)
// 	if (a > b) {
// 		console.log("a is greater than b");
// 		return 40000;
// 	}

// 	// a must be equal to b
// 	console.log("a is equal to b");
// 	return 0;
// 	*/
// } );

// EVEN SHORTER NUMBER SORTING 🤯
// numbers.sort( (a, b) => a - b );

// console.log("Numbers in proper! order:", numbers);

// We can even sort objects based on a property
/*
const students = [
	{
		name: "Johan",
		points: -1337,
	},
	{
		name: "Kim",
		points: 3,
	},
	{
		name: "Alicia",
		points: 42,
	},
	{
		name: "Elliot",
		points: 88,
	},
	{
		name: "Maja",
		points: 35,
	},
];
*/

// console.log("students before sort:", students);
/*
// Sort students by their points
students.sort( (a, b) => {
	// shorthand (only works if the attribute we compare is a **NUMBER**)
	return (a.points - b.points);

	if (a.points < b.points) {
		return -1;
	}

	if (a.points > b.points) {
		return 1;
	}

	return 0;
} );

console.log("students after sort:", students);
*/

/*
// Sort students by their name
students.sort( (a, b) => {
	if (a.name < b.name) {
		return -1;
	}

	if (a.name > b.name) {
		return 1;
	}

	return 0;
} );

console.log("students after sort:", students);
*/

const students = [
	{
		name: "johan",
		points: -1337,
	},
	{
		name: "Kim",
		points: 3,
	},
	{
		name: "alicia",
		points: 42,
	},
	{
		name: "Elliot",
		points: 88,
	},
	{
		name: "Maja",
		points: 35,
	},
];

console.log("students before sort:", students);

// Sort students by their name, regardless of casing on the `name`-attribute
students.sort( (a, b) => {
	if (a.name.toLowerCase() < b.name.toLowerCase()) {
		return -1;
	}

	if (a.name.toLowerCase() > b.name.toLowerCase()) {
		return 1;
	}

	return 0;
} );

console.log("students after sort:", students);
