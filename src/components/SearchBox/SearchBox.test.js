import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';

jest.mock('src/apis/getLocationData', () => ({
	__esModule: true,
	getLocationData: jest.fn(() => [
		{
			title: 'Tokyo',
			location_type: 'City',
			woeid: 1118370,
			latt_long: '35.670479,139.740921'
		},
		{
			title: 'Stoke-on-Trent',
			location_type: 'City',
			woeid: 36240,
			latt_long: '53.018581,-2.16596'
		}
	])
}));

jest.mock('src/apis/getWeatherData', () => ({
	__esModule: true,
	getWeatherData: jest.fn(() => (
		{
			consolidated_weather: [
				{
					id: 5792437894119424,
					weather_state_name: 'Heavy Rain',
					weather_state_abbr: 'hr',
					wind_direction_compass: 'NNE',
					created: '2021-10-13T13:03:46.394492Z',
					applicable_date: '2021-10-13',
					min_temp: 17.205,
					max_temp: 19.765,
					the_temp: 18.47,
					wind_speed: 7.730368589588802,
					wind_direction: 27.999999999999996,
					air_pressure: 1023.5,
					humidity: 87,
					visibility: 9.839412829078183,
					predictability: 77
				},
				{
					id: 6067438274740224,
					weather_state_name: 'Showers',
					weather_state_abbr: 's',
					wind_direction_compass: 'ENE',
					created: '2021-10-13T13:03:49.373557Z',
					applicable_date: '2021-10-14',
					min_temp: 17.42,
					max_temp: 23.445,
					the_temp: 21.979999999999997,
					wind_speed: 5.491867062077468,
					wind_direction: 63.51587485589037,
					air_pressure: 1018.5,
					humidity: 71,
					visibility: 12.053669072615923,
					predictability: 73
				},
				{
					id: 4531479611703296,
					weather_state_name: 'Light Cloud',
					weather_state_abbr: 'lc',
					wind_direction_compass: 'SSE',
					created: '2021-10-13T13:03:52.666931Z',
					applicable_date: '2021-10-15',
					min_temp: 17.795,
					max_temp: 24.93,
					the_temp: 24.025,
					wind_speed: 3.747691670672605,
					wind_direction: 152.3966786726592,
					air_pressure: 1015,
					humidity: 69,
					visibility: 14.542571383122564,
					predictability: 70
				},
				{
					id: 4561570421014528,
					weather_state_name: 'Showers',
					weather_state_abbr: 's',
					wind_direction_compass: 'S',
					created: '2021-10-13T13:03:55.372136Z',
					applicable_date: '2021-10-16',
					min_temp: 19.285,
					max_temp: 25.405,
					the_temp: 24.365000000000002,
					wind_speed: 8.893766564943398,
					wind_direction: 174.54154455788955,
					air_pressure: 1013.5,
					humidity: 72,
					visibility: 12.908675833134495,
					predictability: 73
				},
				{
					id: 6387621937807360,
					weather_state_name: 'Heavy Rain',
					weather_state_abbr: 'hr',
					wind_direction_compass: 'NNE',
					created: '2021-10-13T13:03:58.482185Z',
					applicable_date: '2021-10-17',
					min_temp: 13.155,
					max_temp: 23.18,
					the_temp: 19.59,
					wind_speed: 9.814726530069727,
					wind_direction: 17.867480992332275,
					air_pressure: 1008,
					humidity: 78,
					visibility: 7.3380830947267945,
					predictability: 77
				},
				{
					id: 6089679561555968,
					weather_state_name: 'Light Cloud',
					weather_state_abbr: 'lc',
					wind_direction_compass: 'NE',
					created: '2021-10-13T13:04:01.561929Z',
					applicable_date: '2021-10-18',
					min_temp: 11.81,
					max_temp: 18.064999999999998,
					the_temp: 16.51,
					wind_speed: 6.823051181102362,
					wind_direction: 39.50000000000001,
					air_pressure: 1022,
					humidity: 48,
					visibility: 9.999726596675416,
					predictability: 70
				}
			],
			time: '2021-10-13T23:19:53.910378+09:00',
			sun_rise: '2021-10-13T05:46:24.482171+09:00',
			sun_set: '2021-10-13T17:08:33.081781+09:00',
			timezone_name: 'JST',
			parent: {
				title: 'Japan',
				location_type: 'Country',
				woeid: 23424856,
				latt_long: '37.487598,139.838287'
			},
			sources: [
				{
					title: 'BBC',
					slug: 'bbc',
					url: 'http://www.bbc.co.uk/weather/',
					crawl_rate: 360
				},
				{
					title: 'Forecast.io',
					slug: 'forecast-io',
					url: 'http://forecast.io/',
					crawl_rate: 480
				},
				{
					title: 'HAMweather',
					slug: 'hamweather',
					url: 'http://www.hamweather.com/',
					crawl_rate: 360
				},
				{
					title: 'Met Office',
					slug: 'met-office',
					url: 'http://www.metoffice.gov.uk/',
					crawl_rate: 180
				},
				{
					title: 'OpenWeatherMap',
					slug: 'openweathermap',
					url: 'http://openweathermap.org/',
					crawl_rate: 360
				},
				{
					title: 'Weather Underground',
					slug: 'wunderground',
					url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
					crawl_rate: 720
				},
				{
					title: 'World Weather Online',
					slug: 'world-weather-online',
					url: 'http://www.worldweatheronline.com/',
					crawl_rate: 360
				}
			],
			title: 'Tokyo',
			location_type: 'City',
			woeid: 1118370,
			latt_long: '35.670479,139.740921',
			timezone: 'Asia/Tokyo'
		}
	))
}));

const mockOnCityChange = jest.fn();

describe('SearchBox', () => {
	describe('Input Element', () => {
		it('Should render input element', () => {
			render(
				<SearchBox
					city="Tokyo"
					onCityChange={mockOnCityChange}
				/>
			);
			const inputElement = screen.getByPlaceholderText(/What location are you looking for?/i);
			expect(inputElement).toBeInTheDocument();
		});

		it('Should render input filled with value of city prop', () => {
			render(
				<SearchBox
					city="Tokyo"
					onCityChange={mockOnCityChange}
				/>
			);
			const inputElement = screen.getByPlaceholderText(/What location are you looking for?/i);
			expect(inputElement.value).toBe('Tokyo');
		});

		it('Should be able to type in input', () => {
			render(
				<SearchBox
					city="Tokyo"
					onCityChange={mockOnCityChange}
				/>
			);
			const inputElement = screen.getByPlaceholderText(/What location are you looking for?/i);
			fireEvent.change(inputElement, { target: { value: 'Sai Gon' } });
			expect(inputElement.value).toBe('Sai Gon');
		});
	});

	describe('Suggest List', () => {
		it('Should render suggest item', async () => {
			render(
				<SearchBox
					city=""
					onCityChange={mockOnCityChange}
				/>
			);
			const inputElement = screen.getByPlaceholderText(/What location are you looking for?/i);
			fireEvent.change(inputElement, { target: { value: 'tok' } });
			const suggestElements = await screen.findAllByTestId(/suggest-item/i);
			expect(suggestElements.length).toBe(2);
		});
	});
});
