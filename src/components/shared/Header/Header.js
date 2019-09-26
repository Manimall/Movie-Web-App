import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

 const Header = () => (
 	<header className={styles.block}>
		<div className={styles.content}>
			<Link
				to={'/'}
				title={'to main page off App'}
			>
				<img
					className={styles.logo}
					src={`${process.env.PUBLIC_URL}/images/reactMovie_logo.png`}
					alt='site-logo'
				/>
			</Link>

			<Link
				to={'https://www.themoviedb.org'}
				target={'_blank'}
				rel={'noopener noreferrer'}
				title={'to MovieDB page'}
			>
				<img
					className={styles.tmdbLogo}
					src={`${process.env.PUBLIC_URL}/images/movie-db-logo.svg`}
					alt='tmdb-logo'
				/>
			</Link>
		</div>
	</header>
 );

 export default Header;
