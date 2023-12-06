/**
 * Fetch 🐶
 *
 * Gets `cats.json` and `dogs.json` in parallel
 */

console.log("starting...");

fetch("data/cats.json")
	.then(res => {
		console.log("response:", res);

		// Was request successful?
		if (!res.ok) {
			// Throw an error
			throw new Error("Request was not successful!");
		}

		return res.json();
	})
	.then(data => {
		console.log("data:", data);
	})
	.catch(err => {
		console.log("Nope, something went wrong:", err);
		// alert("Sorry, something went terribly wrong. Please try again never.");
	});

fetch("data/dogs.json")
	.then(res => {
		console.log("response:", res);

		// Was request successful?
		if (!res.ok) {
			// Throw an error
			throw new Error("Request was not successful!");
		}

		return res.json();
	})
	.then(data => {
		console.log("data:", data);
	})
	.catch(err => {
		console.log("Nope, something went wrong:", err);
		// alert("Sorry, something went terribly wrong. Please try again never.");
	});

console.log("done?!");
