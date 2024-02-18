/**
 * TypeScript ✍🏻📜
 *
 */

let username = "pelle";
let level = 42;

// console.log("Your username is:", username);
// console.log("Your level is:", level);

username = "kalle";
username.toUpperCase();

// level = "1337";   // nope! string is not assignable to type number
level = Number("1337");  // works if we convert from string to number

console.log(`Your username is ${username} and your level is ${level}!`);

// explicitly type x to a string
let x: string;

x = "johan";
x = "lolcat";
// x = 1337;
// x = ["lolcats", "loldawgs"];

// explicitly type b to a boolean, while also assigning it a boolean value 😤
// let b: boolean = false;

// implicitly type b to a string as we're assigning it a boolean value
let b = false;

// b = 42;

let todos = ["Learn JS", "Learn TS"];
todos.push("Learn other stuff");  // 👍🏻 yep
// todos.push(1337);  // 👎🏻 nope

let names: string[] = [];
names.push("Pelle");
// names.push(1337);
// names.push(false);

let points: number[] = [];
points.push(13);
points.push(37);

points = [];
points.push(42);
// points.push("lol");
