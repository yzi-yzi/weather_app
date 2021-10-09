import { DAY_LIST, MONTH_LIST, MONTH_LIST_MINIMAL } from './constant';

const isValidDate = (d) => d instanceof Date && !isNaN(d);

export const minimalTimeFormat = (timeString) => {
	const newDate = new Date(timeString);

	if (!isValidDate(newDate)) {
		return '';
	}

	const date = newDate.getDate();
	const monthIndex = newDate.getMonth();

	return `${date} ${MONTH_LIST_MINIMAL[monthIndex]}`;
};

export const fullTimeFormat = (timeString) => {
	const newDate = new Date(timeString);

	if (!isValidDate(newDate)) {
		return '';
	}

	const dayIndex = newDate.day();
	const date = newDate.getDate();
	const monthIndex = newDate.getMonth();
	const year = newDate.getFullYear();

	return `${DAY_LIST[dayIndex]}, ${date} ${MONTH_LIST[monthIndex]} ${year}`;
};
