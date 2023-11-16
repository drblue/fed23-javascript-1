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
const formPasswordEl = document.querySelector("#formPassword");  // <form>
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

// Check the password provided as a parameter
const checkPassword = (password) => {
	const specialCharCount = countSpecialChars(password);

	// is password long enough?
	if (password.length >= 16) {
		return true;

	} else if (password.length >= 12 && password.includes("-")) {
		return true;

	} else if (password.length >= 8 && specialCharCount >= 1) {
		return true;

	} else if (password.length >= 6 && specialCharCount >= 2) {
		return true;

	} else {
		return false;
	}
}

const showInsecurePasswordMsg = () => {
	resultEl.className = "alert alert-danger";
	resultEl.innerText = "🚨 OMG, did you even try? 😱";
}

const showSecurePasswordMsg = () => {
	resultEl.className = "alert alert-success";
	resultEl.innerText = "🔐 That's a secure password! I'm stealing that 😈!";
}

// Check password when the user submits the form
formPasswordEl.addEventListener("submit", (e) => {
	// Stop form from being submitted
	e.preventDefault();

	// Get what password the user has typed
	const pwd = inputPasswordEl.value;

	if (pwd.length < 6) {
		alert("You stupid bro? Need that password, duh!");
		return;
	}

	// Pass password along to checkPassword-function
	if (checkPassword(pwd)) {
		showSecurePasswordMsg();

		// Clear input field
		inputPasswordEl.value = "";
	} else {
		showInsecurePasswordMsg();
	}
});

// Listen for when the form is being reset
formPasswordEl.addEventListener("reset", (e) => {
	console.log("Things go 💥💣");
});

/*
// Check password as the user types
inputPasswordEl.addEventListener("keyup", () => {
	// Get what password the user has typed
	const pwd = inputPasswordEl.value;

	// Pass password along to checkPassword-function
	if (checkPassword(pwd)) {
		showSecurePasswordMsg();
	} else {
		showInsecurePasswordMsg();
	}
});
*/
