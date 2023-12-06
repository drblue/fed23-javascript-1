/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 */

const getJoke = () => {
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
		.catch(() => {
			document.querySelector("#joke").innerText = "ERROR: You don't summon Chuck Norris, Chuck Norris summons you";
		});
}

// Listen for when Chuck Norris is summoned
document.querySelector("#getJokeBtn").addEventListener("click", () => {
	// ?!
	getJoke();
});

// Start of with a joke
getJoke();
