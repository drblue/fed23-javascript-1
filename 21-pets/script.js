/**
 * DOM - Document Object Model - Petslist
 *
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med info om varje pet:
 *
 * STEG 1
 * NAME is a SPECIES of AGE year(s) old.
 *
 * STEG 2
 * NAME is a SPECIES of AGE year(s) old. His owner is OWNER and his favorite
 * hobbies is to HOBBIES.
 */

// Array of pets
const pets = [
	{
		name: "Mr Barksby",
		species: "Dog",
		age: 5,
		hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "WOOOFF!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Kitten",
		age: 1,
		name: "Meow Jr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Old kitten",
		age: 9,
		name: "Meow Sr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	}
];

// Get a reference to the DOM-element with ID of "petslist"
const petsEl = document.querySelector("#petslist");

// Loop over pets
pets.forEach( (pet) => {
	console.log(pet);

	// let petOwnerName = "missing";
	// if (pet.owner) {
	// 	petOwnerName = pet.owner.name;
	// }

	const petOwnerName = pet.owner
		? pet.owner.name
		: "missing";

	petsEl.innerHTML += `
		<li>
			${pet.name} is a ${pet.species} of ${pet.age} year(s) old.
			His owner is ${petOwnerName} and his favorite hobbies is to ${pet.hobbies.join(", ")}.
		</li>
	`;
} );
