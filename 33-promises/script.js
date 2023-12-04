/**
 * Promises 🤞🏻
 *
 */
/*
const promiseOfFutureData = new Promise( (resolve, reject) => {
	// Our actual code that will either
	// resolve or reject
	setTimeout(() => {
		resolve("here's your coffee ☕️");
		// reject("no moar coffee for you 🐿️");
	}, 1500);
} );

console.log("Waiting for promise result...");

promiseOfFutureData
	.then(data => {
		console.log("Yay promise was kept:", data);
	})
	.catch(err => {
		console.log("Promise was broken 🥺:", err);
	});
*/

// Get data from a URL
const getJSON = (url) => {
	return new Promise( (resolve, reject) => {
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
					resolve(data);

				} else {
					// Something went wrong 😢
					console.log("DANGER DANGER WILL ROBINSON!!!!!!!!!");
					reject("Error getting data! Status code is: " + request.status);
				}
			}
		});

		// Send the request
		request.send();

		// Done (?)
		console.log("Request sent to:", url);
	} );

}

getJSON("https://cataas.com/cat?json=true")
	.then(cat => {
		console.log(cat);
	})
	.catch(err => {
		console.log(err);
	});
