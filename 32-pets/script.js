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

getJSON("data/pets.json", (err, data) => {
	console.log("Pets request", err, data);
});
