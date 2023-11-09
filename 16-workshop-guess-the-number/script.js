/**
 * Guess the number
 *
 * STEG 1
 * ✅ Sätt ett tal i en variabel.
 * ✅ Be användaren att gissa talet med hjälp av `prompt()`.
 * ✅ Om användarens gissning är fel, fråga efter en ny gissning.
 * ✅ Om användarens gissning är rätt, visa en alert med ett grattis-meddelande.
 * ✅ Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * ✅ Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * ✅ Slumpa talet (med hjälp av funktionen `getRandomNumber()` nedan) som
 * användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * ✅ Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 */

// Get a random number between 1 and `max` (default 10)
const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}

let numberToGuess = getRandomNumber();
let continueGame = true;
let attempts = 0;

console.log("🐆😈 numberToGuess:", numberToGuess);

while (continueGame) {
	let guess = Number( prompt("Please guess a number between 1-10. Enter 0 to quit.") );
	console.log("You guessed:", guess, typeof guess);

	// Increase number of attempts
	attempts++;

	if (guess === numberToGuess) {
		// Guess was correct
		console.log("Guess was correct! 🥳");
		alert(`Great success! You guessed the correct answer after ${attempts} attempt(s).`);
		continueGame = false;

	} else if (guess === 0) {
		// User rage-quit
		console.log("Guess was 0, quitting game");
		alert(`Y U GIVE UP AFTER ONLY ${attempts - 1} ATTEMPT(S)?!`);
		continueGame = false;

	} else if (guess > numberToGuess) {
		// Guess was too high
		console.log("Guess was too high");
		alert("Guess was too high");

	} else if (guess < numberToGuess) {
		// Guess was too low
		console.log("Guess was lower than GlocalNet");
		alert("Guess was too low");

	} else {
		console.log("That's not a number");
		alert("That's not a number");

	}

}

console.log("Game ended");
