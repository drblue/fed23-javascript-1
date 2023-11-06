/**
 * Lösenordskollen med funktioner
 *
 * Skriv om lösenordskollen till att testa samtliga lösenord i listan `passwords`.
 *
 * Ni ska även ha en funktion som räknar antalet specialtecken och returnerar
 * hur många som hittades.
 *
 * Varje lösenord ska console.log’as tillsammans med dess resultat.
 *
 * STEG 1
 * Testa samtliga lösenord i listan. Koden ska vara oberoende av hur många
 * lösenord som finns i listan.
 *
 * STEG 2
 * Skriv en funktion som räknar antalet unika specialtecken och returnerar
 * hur många specialtecken som hittades. Anropa den här funktionen för
 * varje lösenord.
 *
 * STEG 3 🌟
 * Refaktorera funktionen till att räkna antalet specialtecken (inte bara
 * antalet unika).
 *
 * KRAVSPEC FRÅN TIDIGARE:
 * - minst 6 tecken varav minst två (unika) specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 */

const passwords = [
	// "password",								// 🚨
	"p@*swd",								// 🔐
	"pa$sword",								// 🔐
	"p@ssw%rd",								// 🔐
	"pa$$wd",								// 🔐
	"secretpassword",						// 🚨
	"secret-password",						// 🔐
	"such-password-much-secure-very-long",	// 🔐
	"$$$",									// 🚨
];

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];


// Iterate over `passwords` and do something for each item in the list (array)
for (let i = 0; i < passwords.length; i++) {
	const password = passwords[i];
	console.log(`Checking password ${password}`);

	let specialCharCount = 0;

	// För varje tecken i specialChars, kolla om password innehåller det tecknet
	for (let i = 0; i < specialChars.length; i++) {
		const specialChar = specialChars[i]
		// console.log(`At index ${i}, does password contain '${specialChar}'?`, password.includes(specialChar));

		if (password.includes(specialChar)) {
			specialCharCount++;
			if (specialCharCount === 2) {  // if we found 2 special chars, break free from the loop
				break;  // i want to
			}
		}
	}

	// is password long enough?
	if (password.length >= 16) {
		console.log("🔐 That's a long password!");

	} else if (password.length >= 12 && password.includes("-")) {
		console.log("🔐 That's also a pretty good password!");

	} else if (password.length >= 8 && specialCharCount >= 1) {
		console.log("🔐 That's also a very secure password!");

	} else if (password.length >= 6 && specialCharCount >= 2) {
		console.log("🔐 That's a VERY secure password home-boi! 🛟");

	} else {
		console.log("🚨 Insecure password!");
	}
}
