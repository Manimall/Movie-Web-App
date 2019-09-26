import React from 'react';
import { API_URL, API_KEY, LANG } from "../helpers/config";
import { connect } from "react-redux";
import { fetchMoviesRequest } from '../modules/Movies';
import { updateItems } from "../modules/Shared/actions";

const RmdbService = (props) => (WrappedComponent) => {
	console.log(props);

	// type - popular movies or searching movies
	// loadMore - boolean - if we're pressing loadMoreBtn - it's true
	const createEndPoint = (type) => (loadMore) => (searchTerm) => {
		const toLoadMore = loadMore && props.movies.currentPage + 1;
		return (
			`${API_URL}${type}?api_key=${API_KEY}&language=${LANG}&page=${toLoadMore}&query=${searchTerm}`
		);
	};

	const popularEP = createEndPoint('movie/popular');
	const searchEP = createEndPoint('search/movie');

	const updateItems = (loadMore) => {
		fetchMoviesRequest(
			props.searchTerm
				? searchEP(loadMore)(props.searchTerm)
				: popularEP(loadMore)('')
		);
	};

	console.log(updateItems());
	const newProps = {...props, updateItems};

	return (
		<WrappedComponent
			{...newProps}
		/>
	)
};

const mapStateToProps = (state) => ({
	movies: state.movies,
	searchTerm: state.searchTerm,
});

const mapDispatchToProps =  {
	fetchMoviesRequest,
	updateItems,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RmdbService);
