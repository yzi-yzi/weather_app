import { useEffect } from 'react';

/**
 * hande click outside of element
 * for hide dropdown or something like that
 * @param {DOM} ref // react Ref
 * @param {Function} callback // callback handler
 */
export const useClickOutside = (ref, callback) => {
	useEffect(() => {
		const handleClickOutside = (evt) => {
			// Do something if NOT clicking ref's element or descendent elements
			if (ref.current && !ref.current.contains(evt.target)) {
				callback(evt); // Do what you want to handle in the callback
			}
		};

		document.addEventListener('click', handleClickOutside);

		return (() => {
			document.removeEventListener('click', handleClickOutside);
		});
	});
};
