/**
 * Objects with methods
 *
 */

// Objects can also contain complex (reference) data types
const barksby = {
	name: "Mr Barksby",
	specices: "Dog",
	age: 5,
	hobbies: ["Tail-wagging", "Eating lots of treats", "Car-chasing"],
	owner: {
		name: "Mr Beans",
		age: 57,
	},
	sound: "WOOOFF!",
	speak: function() {
		console.log(`${this.name} says: ${this.sound}`);
	},
	info() {  // same as writing `info: function() {}`
		console.log("barksby:", this);
		console.log(`Hello this is ${this.name} i am ${this.age} old`);
	},
}

const meowJr = {
	hobbies: ["Be cute", "Sleeping"],
	species: "Kitten",
	age: 1,
	name: "Meow Jr",
	sound: "meooow!",
	meowCounter: 0,
	speak: function() {
		console.log(`${this.name} says: ${this.sound}`);
		this.meowCounter++;
		console.log(`Meowed times today: ${this.meowCounter}`);
	},
	info: () => {  // don't use arrow functions in methods on objects as the `this` context object isn't updated to reflect the object it is run on
		console.log("meowjr:", this);
	},
}

// console.log(`Barksby's hobbies are: ${barksby.hobbies.join(", ")}`);
// console.log(`Meow Jr's hobbies are: ${meowJr.hobbies.join(", ")}`);
// console.log(`Barksby's owner is ${barksby.owner.name}`);

// const petSpeak = (pet) => {
// 	console.log(`${pet.name} says: ${pet.sound}`);
// }
// petSpeak(barksby);
// petSpeak(meowJr);

// console.log("this outside of an object:", this);
