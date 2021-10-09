import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './WeatherCardList.module.scss';
import { URLS } from 'src/utils/constant';
import { fullTimeFormat, handleImageError } from 'src/utils';
import defaultImage from 'src/images/default.svg';

function WeatherCardList({
	forecast
}) {
	const [weather, setWeather] = useState({});

	const remapWeatherData = (index) => {
		const weatherItem = forecast[index];

		if (!weatherItem) {
			return;
		}

		const weatherData = {
			icon: weatherItem.weather_state_abbr,
			state: weatherItem.weather_state_name,
			temp: weatherItem.the_temp,
			winSpeed: weatherItem.wind_speed,
			humidity: weatherItem.humidity,
			predictability: weatherItem.predictability
		}

		setWeather(weatherData);
	}

	const remapItemData = (itemData) => {
		if (!itemData) {
			return;
		}

		return {
			icon: itemData.weather_state_abbr,
			minTemp: itemData.min_temp,
			maxTemp: itemData.min_temp,
			date: itemData.applicable_date
		};
	}

	return (
		<div className={styles.cardList}>
			<div className={styles.weatherDetail}>
				<img src={`${URLS.IMAGE}${weather.icon}.svg`} alt={weather.icon} onError={(e) => handleImageError(e, defaultImage)} />
				<span className={styles.temp}>{weather.temp}&deg; C</span>
				<span className={styles.state}>{weather.state}</span>
			</div>
		</div>
	)
}

WeatherCardList.propTypes = {
	forecast: PropTypes.array
}

WeatherCardList.defaultProps = {
	forecast: []
};

export default WeatherCardList

