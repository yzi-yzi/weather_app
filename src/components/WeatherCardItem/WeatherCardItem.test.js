import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherCardItem from './WeatherCardItem';

const testData = {
	id: 5413054842929152,
	icon: 'c',
	maxTemp: 22,
	minTemp: 11,
	date: '10/14/2021'
};

describe('WeatherCardItem', () => {
	it('Should render card element', () => {
		render(
			<WeatherCardItem
				{...testData}
			/>
		);
		const cardElement = screen.getByTestId(/card-item-/i);
		expect(cardElement).toBeInTheDocument();
	});

	it('Should show maxTemp', () => {
		render(
			<WeatherCardItem
				{...testData}
			/>
		);
		const cardElement = screen.getByText(/22/i);
		expect(cardElement).toBeInTheDocument();
	});

	it('Should render card element with active state', () => {
		render(
			<WeatherCardItem
				{...testData}
				active
			/>
		);
		const cardElement = screen.getByTestId(/card-item-/i);
		expect(cardElement).toHaveClass('active');
	});
});
