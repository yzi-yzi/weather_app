import React from 'react';
import PropTypes from 'prop-types';
import SearchBox from '../SearchBox';
import WeatherCardList from '../WeatherCardList';
import styles from './App.module.scss';

function App(props) {
	return (
		<div className={styles.app}>
			<SearchBox />
			<WeatherCardList />
		</div>
	)
}

App.propTypes = {

};

export default App;
