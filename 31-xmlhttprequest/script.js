/**
 * XMLHttpRequest
 *
 */

// Create a new XML Http Request
const request = new XMLHttpRequest();

// Set request to GET data from "https://jsonplaceholder.typicode.com/users"
request.open("GET", "https://jsonplaceholder.typicode.com/users");

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
			console.log("Got me sum data:", data);

			document.querySelector("#users").innerHTML = data
				.map(user => `<li>${user.name}</li>`)
				.join("");

		} else {
			// Something went wrong 😢
			console.log("DANGER DANGER WILL ROBINSON!!!!!!!!!");
		}
	}
});

// Send the request
request.send();

// Done (?)
console.log("Request sent!");
