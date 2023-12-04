/**
 * Pets
 *
 * MINI-WORKSHOP
 *
 * STEG 1
 * Hämta `data/pets.json` och därefter för varje objekt i svaret
 * så hämta den URL som finns i objektet. Skriv ut svaret till console.
 *
 * STEG 2
 * Ändra koden från steg 1 så att du skriver ut informationen om varje
 * husdjur till varsin egen UL i DOM (det finns redan UL-element) för
 * de olika kategorierna av husdjur.
 *
 */

// Get data from a URL
const getJSON = (url, callback) => {
	// Create a new XML Http Request
	const request = new XMLHttpRequest();

	// Set request to GET data from any URL
	request.open("GET", url);

	// Attach an event-listener to the request
	request.addEventListener("readystatechange", () => {
		// Is request done?
		if (request.readyState === 4) {
			if (request.status === 200) {
				// Yay request was successful

				// take the STRING in responseText and PARSE it into JavaScript object
				const data = JSON.parse(request.responseText)
				callback(false, data);

			} else {
				// Something went wrong 😢
				console.log("DANGER DANGER WILL ROBINSON!!!!!!!!!");
				callback("Error getting data! Status code is: " + request.status);
			}
		}
	});

	// Send the request
	request.send();

	// Done (?)
	console.log("Request sent to:", url);
}

/*
getJSON("data/pets.json", (err, petCategories) => {
	console.log("Pets request", err, petCategories);

	// Make a request for each URL in petCategory
	petCategories.forEach((petCategory) => {
		console.log("Got a pet category:", petCategory);

		getJSON(petCategory.url, (err, pets) => {
			console.log("Got me sum pets:", petCategory, pets);

			document.querySelector("#" + petCategory.id).innerHTML = pets
				.map(pet => `<li>${pet.name}</li>`)
				.join("");
		});
	});
});
*/

// Get cattos 🐱
getJSON('data/cats.json', (err, cats) => {
	// Got cats!
	console.log("Got list of cats:", cats);

	// Get doggos 🐶
	getJSON('data/dogs.json', (err, dogs) => {
		// Got woofs!
		console.log("Got list of dogs:", dogs);

		// Get flying projectiles 🦜🚀
		getJSON('data/birds.json', (err, birds) => {
			// Got birds!
			console.log("Got list of birds", birds);

		});
	});
});

// Callback Hell (a.k.a. JavaScript Triangle of Doom)
getJSON('data/cats.json', (err, cats) => {
	getJSON('data/dogs.json', (err, dogs) => {
		getJSON('data/birds.json', (err, birds) => {
			console.log("😰");
		});
	});
});
