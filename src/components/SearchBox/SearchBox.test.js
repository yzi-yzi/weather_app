import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';

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
});
