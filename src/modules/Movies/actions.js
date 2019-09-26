import { createAction } from 'redux-actions'

const fetchMoviesRequest = createAction('my-app/popularMovies/FETCH_MOVIES_REQUEST');
const fetchMoviesSuccess = createAction('my-app/popularMovies/FETCH_MOVIES_SUCCESS');
const fetchMoviesFailure = createAction('my-app/popularMovies/FETCH_MOVIES_FAILURE');

export {
	fetchMoviesRequest,
	fetchMoviesSuccess,
	fetchMoviesFailure,
};
