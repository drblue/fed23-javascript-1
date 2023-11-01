/**
 * Workshop: Password Checker
 *
 * Skriv kod som kollar att lösenordet i variabeln password har
 * - minst 6 tecken varav minst två (unika) specialtecken enligt nedan
 * - minst 8 tecken varav minst ett specialtecken enligt nedan
 * - eller har minst 12 tecken och minst 1 bindestreck
 * - eller har minst 16 tecken
 *
 * Googla för att hitta lämpliga metoder för att lösa uppgiften.
 *
 * Du ska alltså precis som i första dagens workshop ta bort kommentarerna
 * en efter en och testa att alla olika kombinationer av lösenord fungerar
 * och ger rätt resultat.
 */

let password;
// password = "password"; // inte giltigt
password = "pa$$wd"; // giltigt
// password = "pa$sword"; // giltigt
// password = "p@$swd"; // giltigt
// password = "p@ssw%rd"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt
// password = "lolcats-are-funny"
// password = "$$$"

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

console.log(`🕵🏻 Checking password '${password}'`);

let specialCharCount = 0;

// För varje tecken i specialChars, kolla om password innehåller det tecknet
for (let i = 0; i < specialChars.length; i++) {
	const specialChar = specialChars[i]
	console.log(`At index ${i}, does password contain '${specialChar}'?`, password.includes(specialChar));

	if (password.includes(specialChar)) {
		specialCharCount++;
	}
}
console.log("Loop is done, found:", specialCharCount);

// Har lösenordet minst 16 tecken?
if (password.length >= 16) {
	// Ja!
	console.log("- ✅ Great! That's a long password!");

// Har lösenordet minst 12 tecken OCH innehåller minst ett bindestreck?
} else if (password.length >= 12 && password.includes("-")) {
	// Japp
	console.log("- ✅ Great! That's a pretty good password!");

// Har lösenordet minst 8 tecken varav minst ett specialtecken?
// (för varje tecken i specialChars, innehåller password det tecknet? om ja, gör något)
} else if (password.length >= 8 && specialCharCount >= 1) {
	console.log("- ✅ Great! Such password, much secure, very hard to crack!");

// Har lösenordet minst 6 tecken varav minst två specialtecken?
} else if (password.length >= 6 && specialCharCount >= 2) {
	console.log("- ✅ Great! Such password, much secure, VERY hard to crack!");

} else {
	// Nej 😔
	console.log("- 🚨 Insecure password, my grandma can crack it!");
}

console.log("🏁 All done!");
