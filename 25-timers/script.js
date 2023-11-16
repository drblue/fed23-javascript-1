/**
 * Timers
 *
 */

const btnScareMe = document.querySelector('#btnScareMe');
const ghostEl = document.querySelector('#ghost');

btnScareMe.addEventListener("click", () => {
	// hide button
	btnScareMe.classList.add("hide");

	console.log("Starting timer for scaring user 😈");

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

	}, 5000);
});
