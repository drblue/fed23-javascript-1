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
const numbers = [ 47, 5, 21, 50, 28, 18, 47, 13, 24, 8, 18, 15, 11, 43, 7, 102, 1337, 33, 52 ];
console.log("Numbers in chaos:", numbers);

// sort numbers (won't sort numerically!)
// numbers.sort();
// console.log("Numbers in proper? order:", numbers);

// sort numbers NUMERICALLY
numbers.sort( (a, b) => {
	console.log("comparing a vs b", a, b);

	// if a is less than b (i.e. a should be sorted BEFORE b)
	if (a < b) {
		console.log("a is less than b");
		return -1;
	}

	// if a is greater than b (i.e. a should be sorted AFTER b)
	if (a > b) {
		console.log("a is greater than b");
		return 1;
	}

	// a must be equal to b
	console.log("a is equal to b");
	return 0;
} );

console.log("Numbers in proper! order:", numbers);
