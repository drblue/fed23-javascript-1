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

/**
 * Primitive datatypes vs reference datatypes
 */

/*
// Primitive datatypes are copied by **value**
let name1 = "Johan";
let name2 = name1;  // name2 = "Johan"

name1 = "Pelle";

// console.log(name1, name2);

// complex data types (arrays + objects) are copied by **reference**
const littleBarksby = barksby;

littleBarksby.name = "Barksby Jr";

// console.log(barksby.name);			// "Barksby Jr"
// console.log(littleBarksby.name);		// "Barksby Jr"

const names = ["Johan", "Pelle"];
const friends = names;
friends.push("Agda");
console.log(names === friends);			// true
*/

/*
// Primitive Data Types are passed by **value**
const happyBirthday = (name, age) => {  // name = "Pelle", age = 2
	age++;
	console.log(`Happy Birthday, ${name}`, age);
}

let pelle = "Pelle";
let pelle_age = 2;

happyBirthday(pelle, pelle_age);  // Happy Birthday, Pelle 3

console.log("Pelle's age outside of function:", pelle_age);  // 2 😨
*/

// Reference Data Types (like objects and arrays) are passed by **reference**
const happyPetBirthday = (pet) => {
	pet.age++;
	console.log(`Happy Birthday, ${pet.name}`, pet.age);
}

console.log("Meow Jr age before birthday:", meowJr.age);  // 1
happyPetBirthday(meowJr);  // "Happy Birthday, Meow Jr 2"
console.log("Meow Jr age after birthday:", meowJr.age);

/*
const friends = [];

const addFriend = (names, name) => {
	names.push(name);
}

addFriend(friends, "Johan");
addFriend(friends, "Pelle");
addFriend(friends, "Agda");
addFriend(friends, "Beatrice");
*/

const pets = [barksby, meowJr];
