import React from 'react';
import PropTypes from 'prop-types';
import { minimalTimeFormat, handleImageError } from 'src/utils';
import defaultImage from 'src/images/default.svg';
import { URLS } from 'src/utils/constant';
import classNames from 'classnames';
import styles from './WeatherCardItem.module.scss';

function WeatherCardItem({
	id,
	icon,
	minTemp,
	maxTemp,
	date,
	active
}) {
	return (
		<div
			className={classNames(styles.cardItem, { [styles.active]: active })}
			data-id={id}
			data-testid={`card-item-${id}`}
		>
			<img src={`${URLS.IMAGE}${icon}.svg`} alt="rain" onError={(e) => handleImageError(e, defaultImage)} />
			<div className={styles.temp}>
				{minTemp}
				&#176;
				-
				{maxTemp}
				&#176;
			</div>
			<div className={styles.time}>{minimalTimeFormat(date)}</div>
		</div>
	);
}

WeatherCardItem.propTypes = {
	icon: PropTypes.string,
	minTemp: PropTypes.number,
	maxTemp: PropTypes.number,
	date: PropTypes.string,
	active: PropTypes.bool,
	id: PropTypes.number
};

WeatherCardItem.defaultProps = {
	icon: null,
	minTemp: null,
	maxTemp: null,
	date: null,
	active: null,
	id: null
};

export default WeatherCardItem;
