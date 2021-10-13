import React, {
	useState, useRef, useEffect, useCallback
} from 'react';
import PropTypes from 'prop-types';
import searchIcon from 'src/images/search.svg';
import { getLocationData } from 'src/apis';
import { KEYCODE } from 'src/utils/constant';
import classNames from 'classnames';
import { useClickOutside } from 'src/hooks';
import { debounce } from 'lodash';
import styles from './SearchBox.module.scss';

function SearchBox({ onCityChange, city }) {
	const blockRef = useRef(null);

	const [show, setShow] = useState(false);
	const [query, setQuery] = useState('');
	const [highlight, setHighlight] = useState(null);
	const [cityList, setCityList] = useState(null);

	const isCityAvailable = () => cityList && cityList.length !== 0;

	const handleCitySelected = (index) => {
		const citySelect = cityList[index];

		if (!citySelect) {
			return;
		}

		const { woeid, title } = citySelect;

		setShow(false);
		setQuery(title);

		if (onCityChange) {
			onCityChange(woeid);
			setCityList(null);
			setHighlight(null);
		}
	};

	const fetchLocation = async (value) => {
		const locationData = await getLocationData({ query: value });

		setCityList(locationData);
		setHighlight(null);
	};

	const debounceFetch = useCallback(debounce((nextValue) => fetchLocation(nextValue), 200), []);

	const onSearchChange = async (e) => {
		const { value } = e.target;

		if (value === query) {
			return;
		}

		setShow(true);
		setQuery(value);

		debounceFetch(value);
	};

	const handleCityClick = (e) => {
		const { index } = e.target.dataset;
		handleCitySelected(index);
	};

	const handleScrollIntoView = (el) => {
		if (!el) {
			return;
		}

		// avoiding scrollintoview() moving whole page
		if (el.scrollIntoViewIfNeeded) {
			el.scrollIntoViewIfNeeded();
		} else {
			el.scrollIntoView();
		}
	};

	const handleArrowDown = () => {
		if (!isCityAvailable()) {
			return;
		}

		let value = 0;

		if (highlight !== null && highlight !== cityList.length - 1) {
			value = highlight + 1;
		}

		const el = blockRef.current.querySelectorAll('div[data-index]')[value];

		handleScrollIntoView(el);

		setHighlight(value);
	};

	const handleArrowUp = () => {
		if (!isCityAvailable()) {
			return;
		}

		let value = cityList.length - 1;

		if (highlight) {
			value = highlight - 1;
		}

		const el = blockRef.current.querySelectorAll('div[data-index]')[value];

		handleScrollIntoView(el);

		setHighlight(value);
	};

	const handleEsc = () => {
		setShow(false);
	};

	const handleEnter = () => {
		if (highlight !== null) {
			setShow(false);
			handleCitySelected(highlight);
		}
	};

	const handleKeyDown = (e) => {
		if (e.keyCode === KEYCODE.ESC) {
			handleEsc();
			return;
		}

		if (e.keyCode === KEYCODE.ENTER) {
			handleEnter();
			return;
		}

		if (e.keyCode === KEYCODE.ARROW_UP) {
			handleArrowUp();
			return;
		}

		if (e.keyCode === KEYCODE.ARROW_DOWN) {
			handleArrowDown();
		}
	};

	const hideList = () => {
		setShow(false);
	};

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
					type="text"
					className={styles.input}
					placeholder="What location are you looking for?"
					onChange={onSearchChange}
					onKeyDown={handleKeyDown}
					value={query}
				/>
			</div>
			{
				show && isCityAvailable() && (
					<div
						data-testid="suggest-list"
						role="presentation"
						className={styles.suggest}
						onClick={handleCityClick}
					>
						{
							cityList.map((item, index) => (
								<div
									className={classNames(styles.item, { [styles.highlight]: highlight === index })}
									data-index={index}
									key={item.woeid}
									data-testid={`suggest-item-${index}`}
								>
									{item.title}
								</div>
							))
						}
					</div>
				)
			}
		</div>
	);
}

SearchBox.propTypes = {
	city: PropTypes.string,
	onCityChange: PropTypes.func
};

SearchBox.defaultProps = {
	city: '',
	onCityChange: null
};

export default SearchBox;
