/**
 * TypeScript with Vite ✍🏻📜🏎️💨
 *
 */

/**
 * Explicit typing
 */
let myString: string;
myString = "Hello, world!";

let myNumber: number;
myNumber = 1337;

let myBoolean: boolean;
myBoolean = true;

/**
 * Implicit typing
 */
let myName = "Johan";

/**
 * Function parameter typing
 */
/*
const greet = (username: string, age: number) => {
	console.log(`Hello, ${username}! You are ${age} years old.`);
}
greet("Johan", 25);
greet("Pelle", 3);
// greet(["lol"]);

const greet2 = (username: string, age?: number) => {
	if (!age) {
		console.log(`Hello, ${username}!`);
		return;
	}
	console.log(`Hello, ${username}! You are ${age} years old.`);
}
greet2("Alice");
greet2("Bob", 42);
// greet2("Charlie", null);  // even though parameter 2 is optional, it still has be a number if used

const greet3 = (username = "anonymouse", age?: number) => {
	if (!age) {
		console.log(`Hello, ${username}!`);
		return;
	}
	console.log(`Hello, ${username}! You are ${age} years old.`);
}

greet3();
greet3("hangry");
greet3(undefined, 3);
*/

/*
const fancyGreet = (username = "anonymouse", age?: number) => {
	if (!age) {
		return `Oh hello there good sir/ma'am, ${username}!`;
	}
	return `Oh hello there good sir/ma'am, ${username}! You look splendid for being ${age} years old.`;
}

const greeting = fancyGreet("Harold", 72);  // greeting will be inferred as a string, as fancyGreet only ever returns a string as the result
console.log("fancyGreet returned:", greeting);

const pets = ["cat", "dog", "hamster", "goldfish"];
pets.forEach(pet => {
	console.log(pet.toLocaleUpperCase());
});

const ages = [2, 4, 1, 3, 5, 2, 1, 3, 4, 5, 2, 1, 3, 4, 5];
ages.forEach(age => {
	// console.log(age.toLocaleUpperCase());  // Error: Property 'toLocaleUpperCase' does not exist on type 'number'.ts(2339)
});
*/

/**
 * Type Aliases
 */
/*
type strang = string;

let username: strang;
username = "Johan";
console.log(typeof username);  // "string", as all types are removed at runtime

// let x: number | string = 42;
// x = "1337";

type StrangEllerTal = string | number;

let x: StrangEllerTal = "42";
x = 42;
x = "lol";
*/

/**
 * Interfaces
 */
/*
interface Todo {
	id: number
	title: string
	completed: boolean
	due_date?: number
}

const todo1: Todo = {
	id: 1,
	title: "This is my first todo",
	completed: false,
	due_date: 1337
}

const todo2: Todo = {
	id: 2,
	title: "This is my second todo",
	completed: false,
}

const todo3: Todo = {
	id: 3,
	title: "Such wow, much autocomplete, very type-safe",
	completed: true,
}

// Array of Todo 🤩
const todos: Todo[] = [
	{ id: 1, title: "This is my first todo", completed: false, due_date: 1337 },
	{ id: 2, title: "This is my second todo", completed: false },
	{ id: 3, title: "Such wow, much autocomplete, very type-safe", completed: true },
];

todos.forEach(item => {
	// `item` is of type Todo here, so we get autocomplete 😎
	console.log(item.title);
});
*/

/**
 * TypeScript and DOM
 */

const paragraphEl = document.querySelector<HTMLParagraphElement>(".content");  // HTMLParagraphElement | null
//          ^?
const paragraphEl2 = document.querySelector<HTMLParagraphElement>(".content")!;  // 🚨⛔️🛑🚓 HTMLParagraphElement
//             ^?

// const imgEl = document.querySelector(".img-fluid");  // 👎🏻 Element | null
const imgEl = document.querySelector<HTMLImageElement>(".img-fluid");  // 👍🏻 HTMLImageElement | null

const imgEl2: HTMLImageElement | null = document.querySelector(".img-fluid");  // 😒

// 🤩
if (imgEl) {
	imgEl.src = "/js-vs-ts.png";
}

// const text = paragraphEl.
// console.log(text);
