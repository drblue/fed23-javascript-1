/**
 * Clock 🕰️
 *
 */

// get reference to element with id `clock`
const clockEl = document.querySelector('#clock');

const tick = () => {
	// get current date and time
	const now = new Date();

	// output current time to `#clock`-element
	clockEl.innerText = now.toLocaleTimeString();

	if (now.getDay() === 4 && now.getHours() >= 16) {
		clockEl.innerText += " 🥳";
	}
}

// Start interval timer
// We could stop the time by storing the id from
// setInterval and calling `clearInterval(clockId)`
setInterval(tick, 1000);

// Get curren time on page load
tick();
