/**
 * XMLHttpRequest
 *
 * MINI-WORKSHOP: Skriv funktionen `getJSON` som kan hämta vilken URL som helst
 * och ÄNDÅ ta emot en callback som får två parametrar där den första är om något
 * går fel och den andra är datan från om requesten lyckas.
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
			// Yay request is done!

			// Was the request successful?
			if (request.status === 200) {
				// 200 OK
				// console.log("Response was:", request.responseText);

				// take the STRING in responseText and PARSE it into JavaScript object
				const data = JSON.parse(request.responseText)

				console.log("Got a response!");
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
	console.log("Request sent!");
}

// Get users plz
getJSON("https://jsonplaceholder.typicode.com/users", (err, data) => {
	if (err) {
		// Something went wrong 😢
		alert(err);
		return;
	}

	// Output all users
	document.querySelector("#users").innerHTML = data
		.map(user => `<li>${user.name}</li>`)
		.join("");
} );

// Get posts plz
getJSON("https://jsonplaceholder.typicode.com/posts", (err, data) => {
	if (err) {
		// Something went wrong 😢
		alert(err);
		return;
	}

	// Output all posts
	document.querySelector("#posts").innerHTML = data
		.map(post => `<li>${post.title}</li>`)
		.join("");
} );

console.log("All requests sent!");
