import { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } from './actions';
import { combineReducers } from "redux";
import { handleActions } from 'redux-actions';

const isLoading = handleActions({
	[fetchMoviesRequest]: () => true,
	[fetchMoviesSuccess]: () => false,
	[fetchMoviesFailure]: () => false,
}, false);

const error = handleActions({
	[fetchMoviesFailure]: (_state, { payload }) => payload,
}, null);

const data = handleActions({
	[fetchMoviesSuccess]: (_state, { payload: { results } }) => results,
},[]);

const currentPage = handleActions({
	[fetchMoviesSuccess]: (_state, { payload: { page } }) => page,
}, 0);

const totalPages = handleActions({
	[fetchMoviesSuccess]: (_state, { payload: { total_pages } }) => total_pages,
}, 0);

export default combineReducers({
	isLoading,
	data,
	error,
	currentPage,
	totalPages,
});

