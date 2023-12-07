/**
 * Open Weather Map API
 *
 * <https://openweathermap.org/current>
 */

const API_KEY = "7d07164c415624a8f477cd253d231922";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

/**
 * Get current weather for city from OpenWeatherMap API
 * @param {string} city
 */
const getCurrentWeather = async (city) => {
	// get current weather conditions
	const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

	// check if response is ok
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`); // 404 Not Found
	}

	// convert response from JSON
	const data = await response.json();

	// return current weather conditions
	return data;
}
