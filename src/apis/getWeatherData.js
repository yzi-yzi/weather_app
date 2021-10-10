import { URLS } from 'src/utils/constant';

/**
 * get weather forecast of a city with its id
 * @param {Number} id // this is woeid of city
 * @returns {Object}
 */
export const getWeatherData = (id) => {
	const url = `${URLS.LOCATION}${id}`;

	return fetch(url, {
		method: 'GET'
	})
		.then((res) => res.json())
		.then((data) => data)
		.catch((error) => {
			console.log(error);
			return {};
		});
}