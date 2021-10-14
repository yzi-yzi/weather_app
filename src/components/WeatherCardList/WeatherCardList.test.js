import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WeatherCardList from './WeatherCardList';

const testData = {
	forecast: [
		{
			id: 6155625655435264,
			weather_state_name: 'Showers',
			weather_state_abbr: 's',
			wind_direction_compass: 'ENE',
			created: '2021-10-14T04:03:46.757639Z',
			applicable_date: '2021-10-14',
			min_temp: 17.33,
			max_temp: 22.72,
			the_temp: 22.82,
			wind_speed: 5.076947130284473,
			wind_direction: 65.17747824988264,
			air_pressure: 1018,
			humidity: 71,
			visibility: 14.186215004374453,
			predictability: 73
		},
		{
			id: 4696173261619200,
			weather_state_name: 'Heavy Cloud',
			weather_state_abbr: 'hc',
			wind_direction_compass: 'SSE',
			created: '2021-10-14T04:03:49.359140Z',
			applicable_date: '2021-10-15',
			min_temp: 18.14,
			max_temp: 24.895,
			the_temp: 23.689999999999998,
			wind_speed: 3.648880755916117,
			wind_direction: 149.7333159626132,
			air_pressure: 1015,
			humidity: 70,
			visibility: 14.349014256740634,
			predictability: 71
		},
		{
			id: 5343121861771264,
			weather_state_name: 'Heavy Cloud',
			weather_state_abbr: 'hc',
			wind_direction_compass: 'S',
			created: '2021-10-14T04:03:52.642082Z',
			applicable_date: '2021-10-16',
			min_temp: 19.6,
			max_temp: 24.525,
			the_temp: 23.615000000000002,
			wind_speed: 8.281801030069728,
			wind_direction: 183,
			air_pressure: 1014.5,
			humidity: 72,
			visibility: 13.206934005408415,
			predictability: 71
		}
	],
	city: 'Tokyo'
};

describe('WeatherCardList', () => {
	it('Should render card list', () => {
		render(
			<WeatherCardList
				{...testData}
			/>
		);
		const cardElement = screen.getByTestId(/card-list-container/i);
		expect(cardElement).toBeInTheDocument();
	});

	it('Should render weather detail of card item 0 by default', () => {
		render(
			<WeatherCardList
				{...testData}
			/>
		);
		const stateElement = screen.getByTestId(/weather-state/i);
		expect(stateElement.textContent).toBe(testData.forecast[0].weather_state_name);
	});

	it('Should render all card items', async () => {
		render(
			<WeatherCardList
				{...testData}
			/>
		);
		const cardItemElements = await screen.findAllByTestId(/card-item-/i);
		expect(cardItemElements.length).toBe(testData.forecast.length);
	});

	it('Should show weather detail when click to card item', () => {
		render(
			<WeatherCardList
				{...testData}
			/>
		);
		const cardItemElement = screen.getByTestId(`card-item-${testData.forecast[1].id}`);
		const stateElement = screen.getByTestId(/weather-state/i);
		fireEvent.click(cardItemElement);
		expect(stateElement.textContent).toBe(testData.forecast[1].weather_state_name);
	});
});
