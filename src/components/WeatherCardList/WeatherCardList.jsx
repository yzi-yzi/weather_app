import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { URLS } from 'src/utils/constant';
import { fullTimeFormat, handleImageError } from 'src/utils';
import defaultImage from 'src/images/default.svg';
import locationIcon from 'src/images/location.svg';
import WeatherCardItem from '../WeatherCardItem';
import styles from './WeatherCardList.module.scss';

function WeatherCardList({
	city,
	forecast
}) {
	const [weather, setWeather] = useState({});
	const [active, setActive] = useState(0);

	const remapWeatherData = (index) => {
		const weatherItem = forecast[index];

		if (!weatherItem) {
			return;
		}

		const weatherData = {
			icon: weatherItem.weather_state_abbr,
			state: weatherItem.weather_state_name,
			temp: Math.ceil(weatherItem.max_temp),
			winSpeed: Math.ceil(weatherItem.wind_speed),
			humidity: weatherItem.humidity,
			predictability: weatherItem.predictability,
			date: weatherItem.applicable_date
		};

		setWeather(weatherData);
	};

	const remapItemData = (itemData) => {
		if (!itemData) {
			return {};
		}

		return {
			id: itemData.id,
			icon: itemData.weather_state_abbr,
			minTemp: Math.floor(itemData.min_temp),
			maxTemp: Math.ceil(itemData.max_temp),
			date: itemData.applicable_date
		};
	};

	const handleSelectDetail = (e) => {
		const { id } = e.target.dataset;

		if (id === undefined) {
			return;
		}

		const selectedIndex = forecast.findIndex((item) => item.id === Number(id));

		if (id < 0) {
			return;
		}

		setActive(selectedIndex);
		remapWeatherData(selectedIndex);
	};

	useEffect(() => {
		setActive(0);
		remapWeatherData(0);
	}, [forecast]);

	return (
		<div className={styles.cardList} data-testid="card-list-container">
			<div className={styles.location}>
				<img src={locationIcon} alt="location" />
				{city}
			</div>
			<div className={styles.time}>{fullTimeFormat(weather.date)}</div>
			<div className={styles.weatherDetail}>
				<img src={`${URLS.IMAGE}${weather.icon}.svg`} alt={weather.icon} onError={(e) => handleImageError(e, defaultImage)} />
				<span className={styles.temp}>
					{weather.temp}
					&deg; C
				</span>
				<span className={styles.state} data-testid="weather-state">{weather.state}</span>
			</div>
			<div className={styles.moreDetail}>
				<div className={styles.item}>
					<div className={styles.property}>Win Speed</div>
					<div className={styles.value}>
						{weather.winSpeed}
						{' '}
						km/h
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.property}>Humidity</div>
					<div className={styles.value}>
						{weather.humidity}
						%
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.property}>Predictability</div>
					<div className={styles.value}>
						{weather.predictability}
						%
					</div>
				</div>
			</div>
			{
				forecast && forecast.length > 0 && (
					<div
						role="presentation"
						className={styles.forecast}
						onClick={handleSelectDetail}
					>
						{
							forecast.map((item, index) => (
								<WeatherCardItem key={item.id} {...remapItemData(item)} active={active === index} />
							))
						}
					</div>
				)
			}
		</div>
	);
}

WeatherCardList.propTypes = {
	city: PropTypes.string,
	forecast: PropTypes.arrayOf(PropTypes.object)
};

WeatherCardList.defaultProps = {
	city: null,
	forecast: []
};

export default WeatherCardList;
