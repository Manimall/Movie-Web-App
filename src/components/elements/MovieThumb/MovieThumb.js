import React from 'react';
import { Link } from 'react-router-dom';
import { getThumbUrl } from '../../../helpers/config';
import styles from './MovieThumb.module.css';

const MovieThumb = (props) => {
	const { movie: { id, title, poster_path, release_date, vote_average, character }} = props;

	return (
		<Link
			to={{
				pathname: `/movie/${id}`,
				movieName: `${title}`
			}}
			className={styles.block}
		>
			<img
				className={styles.image}
				src={getThumbUrl(poster_path)}
				alt={title}
			/>

			<ul className={styles.infoList}>
				<li>
					<p className={styles.title}>
						“{title}”
						{character && <span className={styles.character}>{character}</span>}
					</p>
				</li>

				<li>
					<p className={styles.title}>
						Дата Релиза: {release_date}
					</p>
				</li>

				<li>
					<p className={styles.title}>
						Средняя оценка: {vote_average}
					</p>
				</li>
			</ul>

		</Link>
	)
};

export default MovieThumb;
