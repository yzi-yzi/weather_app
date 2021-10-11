import React from 'react';
import spinnerIcon from 'src/images/loading.svg';
import styles from './Spinner.module.scss';

const Spinner = () => (
	<div className={styles.spinner}>
		<img src={spinnerIcon} alt="loading" />
	</div>
);

export default Spinner;
