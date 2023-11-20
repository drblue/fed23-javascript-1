/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter() <--
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

// numbers
const numbers = [ 42, 5, 21, 50, 24, 18, 47 ];

console.log("Original numbers:", numbers);

// push all numbers >= 25 into a new array
const largeNumbers = [];
numbers.forEach( (num) => {
	if (num >= 25) {
		largeNumbers.push(num);
	}
} );

console.log("Large numbers:", largeNumbers);
