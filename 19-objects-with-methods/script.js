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
		console.log(`Hello this is ${barksby.name} i am ${barksby.age} old`);
	}
}

const meowJr = {
	hobbies: ["Be cute", "Sleeping"],
	species: "Kitten",
	age: 1,
	name: "Meow Jr",
	sound: "meooow!",
	speak: () => {
		console.log(`Hello this is ${meowJr.name} i am ${meowJr.age} old`);
	}
}

// console.log(`Barksby's hobbies are: ${barksby.hobbies.join(", ")}`);
// console.log(`Meow Jr's hobbies are: ${meowJr.hobbies.join(", ")}`);
// console.log(`Barksby's owner is ${barksby.owner.name}`);

const petSpeak = (pet) => {
	console.log(`${pet.name} says: ${pet.sound}`);
}
// petSpeak(barksby);
// petSpeak(meowJr);
