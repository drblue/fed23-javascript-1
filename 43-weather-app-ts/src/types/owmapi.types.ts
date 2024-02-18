/**
 * Types for Open Weather Map API
 *
 * <https://openweathermap.org/current>
 */

interface WeatherCondition {
	description: string
	icon: string
	id: number
	main: string
}

export interface WeatherReport {
	dt: number
	main: {
		feels_like: number
		humidity: number
		temp: number
	}
	name: string
	rain?: {
		"1h"?: number
		"3h"?: number
	}
	sys: {
		country: string
		sunrise: number
		sunset: number
	}
	weather: WeatherCondition[]
	wind: {
		deg: number
		gust: number
		speed: number
	}
}
