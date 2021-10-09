import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBox.module.scss';
import searchIcon from 'src/images/search.svg';

function SearchBox({ onCityChange }) {
	const [cityList, setCityList] = useState(null);

	const citySelected = (e) => {
		if (!onCityChange) {
			return;
		}

		onCityChange(e.target.value);
	};

	const onSearchChange = (e) => {

	};

	return (
		<div className={styles.searchBox}>
			<div className={styles.box}>
				<div className={styles.icon}>
					<img src={searchIcon} alt="search" />
				</div>
				<input type="text" className={styles.input} placeholder="What location are you looking for?" onChange={onSearchChange} />
			</div>
			{
				cityList && cityList.length > 0 && (
					<div className={styles.suggest}>
						<div className={styles.item}>a</div>
						<div className={styles.item}>b</div>
						<div className={styles.item}>c</div>
					</div>
				)
			}
		</div >
	);
}

SearchBox.propTypes = {
	onCityChange: PropTypes.func
};

SearchBox.defaultProps = {
	onCityChange: null
}

export default SearchBox;
