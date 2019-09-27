import React, { useMemo } from 'react';
import styles from './FourColGrid.module.css';
import ErrorBoundary from '../ErrorBoundary';
import MovieThumb from '../MovieThumb';



const FourColGrid = (props) => {
	const { title, movies } = props;
	console.log(movies);

	const movieList = useMemo(() => {
		return movies.length !== 0 &&
			movies.map((el, i) => (
				<li className={styles.element}>
					<MovieThumb
						key={i}
						className={styles.element}
						movie={el}
					/>
				</li>
			))
	}, [movies]);

	return (
		<ErrorBoundary>
			<div className={styles.block}>
				<div className='container'>
					<h2>{title}</h2>
					<ul className={styles.content}>
						{movieList}
					</ul>
				</div>
			</div>
		</ErrorBoundary>
	);
};

export default FourColGrid;
