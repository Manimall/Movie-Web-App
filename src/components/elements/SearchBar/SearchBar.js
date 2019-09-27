import React, { useState } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './SearchBar.module.css';


const SearchBar = (props) => {
	console.log(props);
	const { callback } = props;

	const [value, setValue] = useState('');


	const selectText = ({ target }) => {
		target.select();
	};

	const timeoutTime = 1000;
	let timeout = null;

	const handleChange = ({ target: { value }}) => {
		setValue(value);

		clearTimeout(timeout);

		if (value !== '') {
			timeout = setTimeout(() => {
				callback(false, value);
			}, timeoutTime);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const value = value.trim();
		const { searchTerm } = props.match.params;
		if (value !== '' && value !== searchTerm) {
			props.history.push(`/search/${value}`);
		}
	};


	return (
		<div className={styles.block}>
			<div className='container'>
				<form className={styles.form} onSubmit={handleSubmit}>
					<label className={styles.label}>
						<FontAwesome className={styles.icon} name="search" size="2.5x" />
						<span className='visually-hidden'>Search</span>
						<input
							type='text'
							name='search'
							className={styles.input}
							placeholder='Search'
							onFocus={selectText}
							onChange={handleChange}
							value={value}
						/>
					</label>
					<button className={styles.submitBtn}>Search</button>
				</form>
			</div>
		</div>
	)
};

export default SearchBar;
