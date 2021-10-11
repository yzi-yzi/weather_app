import React, { useState, useEffect } from 'react';
import { getWeatherData, getLocationData } from 'src/apis';
import SearchBox from '../SearchBox';
import WeatherCardList from '../WeatherCardList';
import styles from './App.module.scss';

function App() {
	const [city, setCity] = useState('');
	const [forecast, setForecast] = useState([]);

	const getCityId = async (id) => {
		const forecastData = await getWeatherData(id);
		// eslint-disable-next-line camelcase
		const { consolidated_weather, title } = forecastData;

		setCity(title);
		// eslint-disable-next-line camelcase
		setForecast(consolidated_weather || []);
	};

	const getUserLocation = () => {
		navigator.geolocation.getCurrentPosition(async (res) => {
			const { latitude, longitude } = res.coords;
			const lattlong = `${latitude},${longitude}`;

			const locationData = await getLocationData({ lattlong });

			if (!locationData || !locationData[0]) {
				return;
			}

			const firstCityId = locationData[0].woeid;
			const firstCity = locationData[0].title;

			setCity(firstCity);
			getCityId(firstCityId);
		}, (error) => {
			console.log(error);
		});
	};

	useEffect(() => {
		getUserLocation();
	}, []);

	return (
		<div className={styles.app}>
			<SearchBox onCityChange={getCityId} city={city} />
			{
				forecast && forecast.length > 0 && <WeatherCardList forecast={forecast} city={city} />
			}
		</div>
	);
}

export default App;
