import { DAY_LIST, MONTH_LIST, MONTH_LIST_MINIMAL } from './constant';

/**
 * check is this a Date object or not
 * @param {*} d
 * @returns {Boolean}
 */
export const isValidDate = (d) => d instanceof Date && !isNaN(d);

/**
 * format time to [date Month]: 09 Nov
 * @param {String, Date} timeString // this can be a time string or Date object
 * @returns {String}
 */
export const minimalTimeFormat = (timeString) => {
	const newDate = new Date(timeString);

	if (!isValidDate(newDate)) {
		return '';
	}

	const date = newDate.getDate();
	const monthIndex = newDate.getMonth();

	return `${date} ${MONTH_LIST_MINIMAL[monthIndex]}`;
};

/**
 * format time to [Day, date Month Year]: Sunday, 10 October 2021
 * @param {String, Date} timeString // this can be a time string or Date object
 * @returns {String}
 */
export const fullTimeFormat = (timeString) => {
	const newDate = new Date(timeString);

	if (!isValidDate(newDate)) {
		return '';
	}

	const dayIndex = newDate.getDay();
	const date = newDate.getDate();
	const monthIndex = newDate.getMonth();
	const year = newDate.getFullYear();

	return `${DAY_LIST[dayIndex]}, ${date} ${MONTH_LIST[monthIndex]} ${year}`;
};
