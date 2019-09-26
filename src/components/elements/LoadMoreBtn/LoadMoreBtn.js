import React from 'react';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ text, onClick }) => (
	<div className={styles.block}>
		<button
			className={styles.btn}
			onClick={() => onClick(true)}
		>
			{text}
		</button>
	</div>
);

export default LoadMoreBtn;
