import React from 'react';
import styles from './Page.module.css';

const Page = ({ children }) => (
	<main className={styles.block}>
		{children}
	</main>
);

export default Page