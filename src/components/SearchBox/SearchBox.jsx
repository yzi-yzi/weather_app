import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBox.module.scss';
import searchIcon from 'src/images/search.svg';
import { getLocationData } from 'src/apis';
import { KEYCODE } from 'src/utils/constant';
import classNames from 'classnames';
import { useClickOutside } from 'src/hooks';

function SearchBox({ onCityChange, city }) {
	const blockRef = useRef(null);

	const [show, setShow] = useState(false);
	const [query, setQuery] = useState('');
	const [highlight, setHighlight] = useState(null);
	const [cityList, setCityList] = useState(null);

	const handleCitySelected = (index) => {
		const { woeid, title } = cityList[index];

		setShow(false);
		setQuery(title);

		if (onCityChange) {
			onCityChange(woeid);
			setCityList(null);
		}
	};

	const onSearchChange = async (e) => {
		const { value } = e.target;

		if (value === query) {
			return;
		}

		setShow(true);
		setQuery(value);

		const locationData = await getLocationData({ query: value });

		setCityList(locationData);
		setHighlight(null);
	};

	const handleCityClick = (e) => {
		const { index } = e.target.dataset;
		handleCitySelected(index);
	}

	const handleKeyDown = (e) => {
		if (e.keyCode === KEYCODE.ESC) {
			e.preventDefault();

			setShow(false);
			return;
		}

		if (e.keyCode === KEYCODE.ENTER && highlight !== null) {
			e.preventDefault();
			setShow(false);
			handleCitySelected(highlight);
			return;
		}

		if (e.keyCode === KEYCODE.ARROW_UP) {
			e.preventDefault();

			let value = cityList.length - 1;

			if (highlight) {
				value = highlight - 1;
			}

			const el = blockRef.current.querySelectorAll('div[data-index]')[value];

			if (!el) {
				return;
			}

			// avoiding scrollintoview() moving whole page
			if (el.scrollIntoViewIfNeeded) {
				el.scrollIntoViewIfNeeded();
			} else {
				el.scrollIntoView();
			}

			setHighlight(value);

			return;
		}

		if (e.keyCode === KEYCODE.ARROW_DOWN) {
			e.preventDefault();

			let value = 0;

			if (highlight !== null && highlight !== cityList.length - 1) {
				value = highlight + 1;
				setHighlight(highlight + 1);
			}

			const el = blockRef.current.querySelectorAll('div[data-index]')[value];

			if (!el) {
				return;
			}

			// avoiding scrollintoview() moving whole page
			if (el.scrollIntoViewIfNeeded) {
				el.scrollIntoViewIfNeeded();
			} else {
				el.scrollIntoView();
			}

			setHighlight(value);
		}
	};

	const hideList = () => {
		setShow(false);
	}

	useEffect(() => {
		setQuery(city);
	}, [city]);

	useClickOutside(blockRef, hideList);

	return (
		<div className={styles.searchBox} ref={blockRef}>
			<div className={styles.box}>
				<div className={styles.icon}>
					<img src={searchIcon} alt="search" />
				</div>
				<input
					type="text" className={styles.input}
					placeholder="What location are you looking for?"
					onChange={onSearchChange} value={query}
					onKeyDown={handleKeyDown}
				/>
			</div>
			{
				show && cityList && cityList.length > 0 && (
					<div className={styles.suggest} onClick={handleCityClick}>
						{
							cityList.map((item, index) => (
								<div
									className={classNames(styles.item, { [styles.highlight]: highlight === index })}
									data-index={index} key={item.woeid}
								>
									{item.title}
								</div>
							))
						}
					</div>
				)
			}
		</div >
	);
}

SearchBox.propTypes = {
	city: PropTypes.string,
	onCityChange: PropTypes.func
};

SearchBox.defaultProps = {
	city: '',
	onCityChange: null
}

export default SearchBox;
