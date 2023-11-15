/**
 * Workshop: Password Checker (DOM Edition)
 *
 * Istället för att vi har lösenorden hårdkodade så låt användaren skriva in
 * ett lösenord att testa i ett input-fält. Därefter när användaren klickar på
 * en knapp så testas lösenordet och användaren får se utfallet i DOM.
 *
 * ⭐ STEG 2
 * Visa olika Bootstrap Alert beroende på utfall.
 *
 * 🤔 STEG 3
 * Testa lösenordet löpande efterhand som användaren skriver in det.
 *
 * 🤩 STEG 4
 * Fördela ansvar för de olika delarna till olika funktioner så att en del
 * ansvarar för att hämta lösenordet som ska testas, en del testar själva
 * lösenordet och en tredje del uppdaterar DOM med resultatet.
 */

// Get references to elements
const inputPasswordEl = document.querySelector("#inputPassword");  // <input>
const btnCheckEl = document.querySelector("#btnCheck");  // <button>
const resultEl = document.querySelector("#result");  // div med resultatet

const specialChars = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

const countSpecialChars = (password) => {
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

	return specialCharCount;
}

const handleCheckPassword = () => {
	// Get what password the user has typed
	const password = inputPasswordEl.value;

	const specialCharCount = countSpecialChars(password);

	// is password long enough?
	if (password.length >= 16) {
		resultEl.className = "alert alert-success";
		resultEl.innerText = "🔐 That's a long password!";

	} else if (password.length >= 12 && password.includes("-")) {
		resultEl.className = "alert alert-success";
		resultEl.innerText = "🔐 That's also a pretty good password!";

	} else if (password.length >= 8 && specialCharCount >= 1) {
		resultEl.className = "alert alert-success";
		resultEl.innerText = "🔐 That's also a very secure password!";

	} else if (password.length >= 6 && specialCharCount >= 2) {
		resultEl.className = "alert alert-success";
		resultEl.innerText = "🔐 That's a VERY secure password home-boi! 🛟";

	} else {
		resultEl.className = "alert alert-danger";
		resultEl.innerText = "🚨 Insecure password!";
	}
}

// Register click-event handler
btnCheckEl.addEventListener("click", handleCheckPassword);

// Register keyup-event handler
inputPasswordEl.addEventListener("keyup", handleCheckPassword);
