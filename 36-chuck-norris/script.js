/**
 * Chuck Norris Joke of the Day
 *
 * <https://api.chucknorris.io/>
 * <https://api.chucknorris.io/jokes/random>
 */

const getJoke = async () => {
	try {
		const response = await fetch("https://api.chucknorris.io/jokes/random");
		if (!response.ok) {
			throw new Error("Chuck Norris is unavailable to take you call right now");
		}

		const joke = await response.json();
		document.querySelector("#joke").innerText = joke.value;

	} catch (err) {
		document.querySelector("#joke").innerText = "ERROR: You don't summon Chuck Norris, Chuck Norris summons you";
	}
}

// Listen for when Chuck Norris is summoned
document.querySelector("#getJokeBtn").addEventListener("click", () => {
	// ?!
	getJoke();
});

// Start of with a joke
getJoke();
