const CORS_URL = 'https://cors-anywhere-nab.herokuapp.com/';

export const URLS = {
	BASE: `${CORS_URL}https://www.metaweather.com/api/`,
	LOCATION: `${CORS_URL}https://www.metaweather.com/api/location/`,
	SEARCH_LOCATION: `${CORS_URL}https://www.metaweather.com/api/location/search/`,
	IMAGE: 'https://www.metaweather.com/static/img/weather/'
};

export const KEYCODE = {
	ARROW_UP: 38,
	ARROW_DOWN: 40,
	ESC: 27,
	ENTER: 13,
	TAB: 9
};

export const DAY_LIST = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const MONTH_LIST_MINIMAL = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const MONTH_LIST = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
