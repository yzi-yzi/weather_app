import queryString from 'query-string';
import { URLS } from 'src/utils/constant';

/**
 * get list of location depend on query or lattlong
 * @param {Object} params // it will contain one of [querry, lattlong]
 * @returns {Array}
 */
export const getLocationData = (params) => {
	if (!params || (!params.query && !params.lattlong)) {
		return [];
	}

	const url = `${URLS.SEARCH_LOCATION}?${queryString.stringify(params)}`;

	return fetch(url, {
		method: 'GET'
	})
		.then((res) => res.json())
		.then((data) => data.splice(0, 50))
		.catch((error) => {
			console.log(error);
			return [];
		});
};
