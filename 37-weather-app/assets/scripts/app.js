/**
 * 🌧️.
 *
 */

const forecastEl = document.querySelector("#forecast");

const renderCurrentWeather = (conditions) => {
	forecastEl.innerHTML = `
		<img src="assets/images/forecast-banner.png" class="card-img-top">
		<div class="card-body">
			<h5 class="card-title" id="location">
				<span id="city">${conditions.name}</span>,
				<span id="country">${conditions.sys.country ?? "N/A"}</span>
			</h5>
			<p class="temp">
				<span id="temperature">${conditions.main.temp}</span>
				&deg;C
			</p>
			<p class="humidity">
				<span id="humidity">${conditions.main.humidity}</span>
				&percnt; humidity
			</p>
			<p class="wind">
				<span id="windspeed">${conditions.wind.speed}</span>
				m/s
			</p>
		</div>
	`;
}

// Listen for when the user wants to get weather conditions for a city
document.querySelector("#search-form").addEventListener("submit", async (e) => {
	e.preventDefault();

	// Hide any previous current weather conditions
	forecastEl.classList.add("hide");

	// Get value from input-field
	// document.querySelector("#query").value;
	const city = e.target.query.value.trim();

	// Make sure input is at least somewhat valid
	if (city.length < 3) {
		alert("Please enter at least 3 chars");
		return;
	}

	// Get weather for city
	console.log(`Searching for city "${city}"`);
	const data = await getCurrentWeather(city);
	console.log(`Current weather conditions in "${city}":`, data);

	// render (and then show) current weather conditions
	renderCurrentWeather(data);
	forecastEl.classList.remove("hide");
});
