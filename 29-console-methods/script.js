/**
 * Console-methods
 *
 * .error()	- Log level 1
 * .warn()	- Log level 2
 * .log()	- Log level 3
 * .info()	- Log level 4
 * .debug()	- Log level 5
 *
 * .dir - Show a complete representation of an array (or object), regardless of its length.
 * .table - Show a table representation of an array. VERY useful when the array contains objects!
 *
 */

console.error("Hello, I am error 🚨🛑🚔");
console.warn("Hello, I am warning ⚠️");
console.log("Hello, I am log 🪵");
console.info("Hello, I am info ℹ️");
console.debug("Hello, I am (de)bug 🐞🐛 ");

const products = [
	{ sku: "CORR-BWL", name: "Corrosive bowl", in_stock: 321, price: 0.99 },
	{ sku: "CTN-SPCE", name: "Cotton spice rack", in_stock: 2, price: 149.99 },
	{ sku: "GOOD-COOKIES", name: "Inside-out Oreo cookies", in_stock: 18, price: 2.49 },
	{ sku: "BACK-BREAKER", name: "The uncomfortable broom", in_stock: 1, price: 28.65 },
];

// Console.log each item in the array
products.forEach(product => {
	console.log(product);
});

// Log an array of objects (like a real haxx0r 🤩)
console.info("Products:");
console.table(products);
