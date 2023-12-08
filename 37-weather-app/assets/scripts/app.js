/**
 * 🌧️.
 *
 */

const alertEl = document.querySelector("#alert");
const forecastEl = document.querySelector("#forecast");
const spinnerEl = document.querySelector("#spinner");

const renderNotice = (msg, severity = "info") => {
	alertEl.innerText = msg;
	alertEl.className = `alert alert-${severity}`;
}

const renderErrorNotice = msg => renderNotice(msg, "danger");
const renderInfoNotice = msg => renderNotice(msg, "info");
const renderWarningNotice = msg => renderNotice(msg, "warning");

// Render current weather conditions
const renderCurrentWeather = (conditions) => {
	const icons = conditions.weather.map(condition =>
		`<li><img src="http://openweathermap.org/img/wn/${condition.icon}@2x.png" alt="${condition.main}" title="${condition.description}"></li>`);

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
			<ul class="conditions">
				${icons.join("")}
			</ul>
		</div>
	`;
}

// Listen for when the user wants to get weather conditions for a city
document.querySelector("#search-form").addEventListener("submit", async (e) => {
	e.preventDefault();

	// Hide any previous current weather conditions and errors
	forecastEl.classList.add("hide");
	alertEl.className = "hide";

	// Get value from input-field
	const city = e.target.query.value.trim();

	// Make sure input is at least somewhat valid
	if (city.length < 3) {
		renderInfoNotice("Please enter at least 3 chars");
		return;
	}

	try {
		// Show loading spinner
		spinnerEl.classList.remove("hide");

		// Get weather for city
		const data = await getCurrentWeather(city);

		// render (and then show) current weather conditions
		renderCurrentWeather(data);
		forecastEl.classList.remove("hide");

	} catch (err) {
		// Something went wrong!
		renderErrorNotice(err);

	}

	// hide loading spinner
	spinnerEl.classList.add("hide");
});
