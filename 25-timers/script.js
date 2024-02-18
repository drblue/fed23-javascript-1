/**
 * Timers
 *
 */

const btnScareMe = document.querySelector('#btnScareMe');
const ghostEl = document.querySelector('#ghost');

// Get a random number between 1 and `max` (default 10)
const getRandomNumber = (max = 10) => {
	return Math.ceil( Math.random() * max );
}

btnScareMe.addEventListener("click", () => {
	// hide button
	btnScareMe.classList.add("hide");

	// get a random delay to wait before scaring the user
	const delay = getRandomNumber() * 1000;

	console.log(`Starting timer for ${delay} ms before scaring user 😈`);

	// start timer
	setTimeout(() => {
		// this will be executed efter (approx) 2000 ms
		console.log("Scaring user... 😱");

		// show ghost 👻
		ghostEl.classList.remove("hide");

		// start timer
		setTimeout(() => {
			console.log("Showing button again... ✅");
			ghostEl.classList.add("hide");  // hide ghost
			btnScareMe.classList.remove("hide");  // show button again
		}, 4000);

	}, delay);
});
