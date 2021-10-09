import queryString from 'query-string';
import { URLS } from 'src/utils/constant';

export const getWeatherData = (params) => {
	return fetch(`${URLS.LOCATION}${queryString(params)}`)
		.then((res) => res.json())
		.then((data) => data)
		.catch((error) => {
			console.log(error);
			return {};
		});
}