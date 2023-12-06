/**
 * Fetch 🐶
 *
 * Get `cats.json` and THEN get `dogs.json`
 */

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

		return fetch("data/dogs.json");
	})
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
