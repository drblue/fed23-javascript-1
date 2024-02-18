/**
 * async/await 🐶
 *
 */

/*
fetch("data/cats.json")
	.then(res => {
		if (!res.ok) {
			throw new Error("Request was not successful!");
		}

		return res.json();
	})
	.then(data => {
		console.log("data:", data);
	})
	.catch(err => {
		console.log("Nope, something went wrong:", err);
	});
*/

// wait for response of get data
// wait for json-parse
// use data

/*
const getData = (url) => {
	console.log("Would get data from:", url);
	return "who let the dogs out";
}
*/
/*
const getData = (url) => {
	return new Promise((resolve, reject) => {
		console.log("Would get data from:", url);
		resolve("who let the dogs out");
	});
}
*/

const getData = async (url) => {
	const res = await fetch(url);  // wait for fetch to resolve

	if (!res.ok) {
		throw new Error("Request was not successful!")
	}

	const data = await res.json();  // wait for JSON-parsing

	return data;
}

/*
getData("data/dogs.json")
	.then(doggos => {
		console.log("doggos!!!!!!!!!", doggos);

		return getData("data/birds.json");
	})
	.then(birdos => {
		console.log("birdossssss", birdos);
	})
	.catch(err => {
		console.error("No doggos (or birdos maybe) *sad*:", err);
	});
*/

const getPets = async () => {
	const doggos = await getData("data/dogs.json");
	console.log("doggos!!!!!!!!!", doggos);

	const birdos = await getData("data/birds.json");
	console.log("birdossssss", birdos);
}

getPets();
