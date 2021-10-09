import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeatherCardItem.module.scss';
import { minimalTimeFormat, handleImageError } from 'src/utils';
import defaultImage from 'src/images/default.svg';

function WeatherCardItem({
	icon,
	minTemp,
	maxTemp,
	date
}) {
	return (
		<div className={styles.cardItem}>
			<img src={icon} alt="rain" onError={(e) => handleImageError(e, defaultImage)} />
			<div className={styles.temp}>{`${minTemp}&#176; - ${maxTemp}&#176;`}</div>
			<div className={styles.time}>{minimalTimeFormat(date)}</div>
		</div>
	)
}

WeatherCardItem.propTypes = {
	icon: PropTypes.string,
	minTemp: PropTypes.number,
	maxTemp: PropTypes.number,
	date: PropTypes.string
}

WeatherCardItem.defaultProps = {
	icon: null,
	minTemp: null,
	maxTemp: null,
	date: null
};

export default WeatherCardItem
