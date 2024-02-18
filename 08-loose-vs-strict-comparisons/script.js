/**
 * Loose vs Strict Comparissons
 */

let age = 25;   // number

// Loose comparisson (different data types can still be equal)
console.log('25 == 25', age == 25);		// true
console.log('25 == "25"', age == "25");	// true
console.log('25 != 25', age != 25);		// false
console.log('25 != "25"', age != "25");	// false

// Strict comparisson (different data types *CAN NOT* be equal)
console.log('25 === 25', age === 25);		// true
console.log('25 === "25"', age === "25");	// false
console.log('25 !== 25', age !== 25);		// false
console.log('25 !== "25"', age !== "25");	// true
