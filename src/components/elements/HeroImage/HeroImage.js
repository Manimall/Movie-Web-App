import React from 'react';
import styles from './HeroImage.module.css';

const HeroImage = (props) => {
	const { img, title, overview: text } = props;
	const bgImage = {
		backgroundImage: `url('${img}')`,
	};

	return (
		<div className={styles.block} style={bgImage}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<h1>{title}</h1>
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
};

export default HeroImage;