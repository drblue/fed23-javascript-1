/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 */

fetch("https://api.chucknorris.io/jokes/random")
	.then(response => {
		if (!response.ok) {
			throw new Error("Chuck Norris is unavailable to take you call right now");
		}

		return response.json();
	})
	.then(joke => {
		document.querySelector("#joke").innerText = joke.value;
	})
	.catch(err => {
		document.querySelector("#joke").innerText = err;
	});
