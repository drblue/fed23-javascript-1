/**
 * Open Weather Map API
 *
 * <https://openweathermap.org/current>
 */

const API_KEY = "7d07164c415624a8f477cd253d231922";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const FAKE_SLOW_API = true;
const FAKE_SLOW_API_DELAY = 3000;

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

	// fake a slow api
	FAKE_SLOW_API && await new Promise(r => setTimeout(r, FAKE_SLOW_API_DELAY));

	// return current weather conditions
	return data;
}
