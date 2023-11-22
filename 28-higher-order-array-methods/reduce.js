/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce() <--
 *
 * - Clone an array
 * - Shuffle an array
 */

/**
 * Numbers
 */
/*
const simple_numbers = [ 3, 7, 13, 19 ];

// old way 🤮
// let sum = 0;
// simple_numbers.forEach(num => {
// 	sum = sum + num;
// });
// console.log("The sum of all numbers (using forEach) is:", sum);

// new way 😎
const total_sum = simple_numbers.reduce( (sum, num) => {
	return sum + num;
}, 0 );
console.log("The sum of all numbers (using reduce) is:", total_sum);

const total_sum2 = simple_numbers.reduce( (sum, num) => sum + num, 1295 );
console.log("The total_sum2 of all numbers (using reduce) is:", total_sum2);

const numbers = [ 47, 5, 21, 50, 24, 18, 47, 13, 28, 8, 18, 15, 11, 43, 5, 33 ];
const numbers_sum = numbers.reduce( (prevValue, curr) => {
	return prevValue + curr;
}, 0 );
console.log(`Reducer complete, numbers_sum is ${numbers_sum}`);
*/

/*
const students = [
	{
		name: "Johan",
		points: 90,
	},
	{
		name: "Kim",
		points: 30,
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
const total_points = students.reduce( (sum, student) => {
	return sum + student.points;
}, 0 );
console.log("Total points for all students:", total_points);
*/

const products = [
	{
		sku: "CORR-BWL",
		name: "Corrosive bowl",
		in_stock: 321,
		price: 0.99,
	},
	{
		sku: "CTN-SPCE",
		name: "Cotton spice rack",
		in_stock: 2,
		price: 149.99,
	},
	{
		sku: "GOOD-COOKIES",
		name: "Inside-out Oreo cookies",
		in_stock: 18,
		price: 2.49,
	},
	{
		sku: "BACK-BREAKER",
		name: "The uncomfortable broom",
		in_stock: 1,
		price: 28.65,
	},
];

// calculate total stock
const total_stock = products.reduce( (sum, product) => {
	return sum + product.in_stock;
}, 0 );
console.log(`Total number of stock is ${total_stock} items.`);

// calculate total stock value (current value is $ 691.24)
const total_stock_value = products.reduce( (sum, product) => {
	return sum + (product.in_stock * product.price);
}, 0);
console.log(`The total stock value is $ ${total_stock_value}.`);
