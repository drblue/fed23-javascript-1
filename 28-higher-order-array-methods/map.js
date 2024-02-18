/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map() <--
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array
 */

// const numbers = [ 5, 21, 50, 24, 92, 18, 47 ];
// console.log("Numbers:", numbers);

/*
const doubledNumbers = [];
numbers.forEach(num => {
	doubledNumbers.push(num * 2);
});
console.log("Doubled numbers:", doubledNumbers);
*/

// multiply all numbers by 2
// const doubledNumbers = numbers.map(num => num * 2);
// console.log("Doubled numbers:", doubledNumbers);

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

/*
const skus = [];
products.forEach(product => {
	skus.push(product.sku);
});
console.log("All SKUs:", skus);
*/

const skus = products.map( product => {
	return product.sku;
} );
console.log("All SKUs, but with map:", skus);

const productNames = products.map(product => product.name);
console.log("All product names:", productNames);
