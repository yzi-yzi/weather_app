import { isValidDate, minimalTimeFormat, fullTimeFormat } from '../index';

// isValidDate
describe('Function isValidate()', () => {
	it('new Date() should be true', () => {
		expect(isValidDate(new Date())).toBeTruthy();
	});

	it('123 should be false', () => {
		expect(isValidDate(123)).toBeFalsy();
	});

	it('new Date(undefined) should be false', () => {
		expect(isValidDate(new Date('20/10/2021'))).toBeFalsy();
	});
});

// minimalTimeFormat
describe('Function minimalTimeFormat()', () => {
	it('null should return 1 Jan', () => {
		expect(minimalTimeFormat(null)).toBe('1 Jan');
	});

	it('undefined should return empty string', () => {
		expect(minimalTimeFormat(undefined)).toBe('');
	});

	it('10/20/2021 should return 20 Oct', () => {
		expect(minimalTimeFormat('10/20/2021')).toBe('20 Oct');
	});

	it('20/20/2021 should return empty string', () => {
		expect(minimalTimeFormat('20/20/2021')).toBe('');
	});
});

// fullTimeFormat
describe('Function fullTimeFormat()', () => {
	it('null should return Thursday, 1 January 1970', () => {
		expect(fullTimeFormat(null)).toBe('Thursday, 1 January 1970');
	});

	it('undefined should return empty string', () => {
		expect(fullTimeFormat(undefined)).toBe('');
	});

	it('10/20/2021 should return Wednesday, 20 October 2021', () => {
		expect(fullTimeFormat('10/20/2021')).toBe('Wednesday, 20 October 2021');
	});

	it('20/20/2021 should return empty string', () => {
		expect(fullTimeFormat('20/20/2021')).toBe('');
	});
});
