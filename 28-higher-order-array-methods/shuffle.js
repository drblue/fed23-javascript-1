/**
 * Higher Order Array Methods
 *
 * .sort()
 * .filter()
 * .find()
 * .map()
 * .reduce()
 *
 * - Clone an array
 * - Shuffle an array <--
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// console.log("Numbers before shuffling:", numbers);

/*
// Poor developer's array shuffling
numbers.sort(() => {
	// return negative, 0 or positive number
	return 0.5 - Math.random();
});
console.log("Numbers after poor devlopers shuffling:", numbers);
*/

// Fisher-Yates algorithm for array shuffling
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}
// shuffleArray(numbers);
// console.log("Numbers after proper shuffling:", numbers);

const students = ["Adam", "Aidin", "Alexander", "Ali", "Amin", "Andreas", "Angelica", "Ann", "Anna", "Camilla", "Carolin H.", "Caroline R.", "Denis", "Elin", "Ellinor", "Emma Q.", "Emma Å.", "Erik L.", "Erik T.", "Fanny", "Hanna", "Jacob", "Joakim", "Johan", "Josefin A.", "Josefine P.", "Karin", "Khaled", "Leonid", "Linnea M.", "Linnea S.", "Madeleine", "Mattea", "Max", "Mohsen", "Nichlas", "Oscar", "Petar", "Peter", "Pontus", "Pucha", "Ramil", "Robin", "Sofia", "Tomasz", "Torbjörn", "Victor", "William"];

/*
// 😪
students.sort(() => {
	// return negative, 0 or positive number
	return 0.5 - Math.random();
});
console.log("Numbers after poor devlopers shuffling:", students);
*/

const shuffledStudents = [...students];  // clone `students` array
shuffleArray(shuffledStudents);  // shuffle the `shuffledStudents` array
console.log("Students after proper shuffling:", shuffledStudents);
