import React, { useEffect } from 'react';
import './Home.css';
import HeroImage from "../../elements/HeroImage";
import SearchBar from "../../elements/SearchBar";
import FourColGrid from "../../elements/FourColGrid";
import MovieThumb from "../../elements/MovieThumb";
import LoadMoreBtn from "../../elements/LoadMoreBtn";
import Spinner from "../../elements/Spinner";

import { getBackdropUrl } from "../../../helpers/config";
import {fetchMoviesRequest} from "../../../modules/Movies";
import { updateItems } from "../../../modules/Shared/actions";
import {connect} from "react-redux";
import {LANG, API_URL, API_KEY} from "../../../helpers/config";


const Home = (props) => {

	console.log(props);
	const { movies: { isLoading, data, error, currentPage, totalPages, searchTerm } } = props;
	const { fetchMoviesRequest, updateState } = props;

	// type - popular movies or searching movies
	// loadMore - boolean - if we're pressing loadMoreBtn - it's true
	const createEndPoint = (type) => (loadMore) => (searchTerm) => {
		const toLoadMore = loadMore && currentPage + 1;
		return (
			`${API_URL}/${type}?api_key=${API_KEY}&language=${LANG}&page=${toLoadMore}&query=${searchTerm}`
		);
	};

	const popularEP = createEndPoint('movie/popular');
	const searchEP = createEndPoint('search/movie');

	const updateMovies = (loadMore, search) => {
		console.log(loadMore, search);
		console.log(searchTerm);
		updateState(loadMore, search);
		fetchMoviesRequest(
			searchTerm
				? searchEP(loadMore)(searchTerm)
				: popularEP(loadMore)('')
		);
	};


	useEffect(() => {
		fetchMoviesRequest(popularEP(false)(''));
	}, [fetchMoviesRequest]);

	const heroImage = data[0] || null;
	console.log(data);

	return (
		<div>
			{heroImage && (
				<HeroImage
					img={getBackdropUrl(heroImage.backdrop_path)}
					title={heroImage.title}
					overview={heroImage.overview}
				/>
			)}
			<SearchBar/>
			<FourColGrid/>
			<MovieThumb/>
			{isLoading && <Spinner/>}
			{currentPage < totalPages && !isLoading && (
				<LoadMoreBtn text={'Load More'} onClick={updateMovies} />
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	movies: state.movies,
	searchTerm: state.searchTerm,
});

const mapDispatchToProps =  {
	fetchMoviesRequest,
	updateState: updateItems,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);

