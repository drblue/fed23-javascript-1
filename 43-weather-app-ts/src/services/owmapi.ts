/**
 * Open Weather Map API
 *
 * <https://openweathermap.org/current>
 */

const API_KEY = "7d07164c415624a8f477cd253d231922";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const FAKE_SLOW_API = true;
const FAKE_SLOW_API_DELAY = 2000;

export const getCurrentWeather = async (city: string) => {
	// Query API for current weather conditions in `city`
	const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

	// Check if we got an OK response
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`); // 404 Not Found
	}

	// Convert response from JSON
	const data = await response.json();

	// Fake slow API
	FAKE_SLOW_API && await new Promise(r => setTimeout(r, FAKE_SLOW_API_DELAY));

	// Return current weather conditions
	return data;
}
