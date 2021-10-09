import queryString from 'query-string';
import { URLS } from 'src/utils/constant';

export const getLocation = (params) => {
	return fetch(`${URLS.SEARCH_LOCATION}${queryString(params)}`)
		.then((res) => res.json())
		.then((data) => data)
		.catch((error) => {
			console.log(error);
			return [];
		});
}