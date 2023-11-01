/**
 * Loops ∞
 */

/**
 * for-loop
 */
/*
let sum = 0;
let points = [1, 5, -50, 10, 20, 8, 3];
for (let i = 0; i < points.length; i++) {
	console.log(`At index ${i}, number is:`, points[i]);

	if (points[i] <= 0) {
		console.log("Got a 0 or negative points, skipping over");
		continue;
	}

	// add points[i] to sum
	// sum = sum + points[i];
	sum += points[i]
	console.log(`New sum is:`, sum);

	if (sum >= 30) {
		console.log("You got maximum score! Stopping further counting");
		break;
	}
}
console.log("The sum of all numbers is:", sum);
*/

/**
 * for-loop
 */
// for (let i = 0; i < 5; i++) {
// 	// do stuff
// 	console.log("🐑", i);
// }
// console.log("Sheeeeep:", i);  // no can do

/**
 * while-loop
 * runs 0 or more times
 */
// let i = 0;
// while (i < 5) {
// 	// do this
// 	console.log("in while-loop, i is:", i);

// 	i++;  // increase i by 1
// }
// console.log("Screw u guys i'm going home");
// console.log("Finished looping, i is:", i);

/**
 * do while loop
 * runs *at least* 1 time
 */
let i = 5;
do {
	// do this
	console.log("in do while-loop, i is:", i);

	i++;  // increase i by 1
} while (i < 5);
