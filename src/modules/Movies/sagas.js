import { takeLatest, fork, put, call } from 'redux-saga/effects';
import {fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } from './actions';
import { getMovies } from './api';


function* fetchMoviesFlow ({payload}) {
	try {
		console.log(payload);
		const result = yield call(getMovies, payload);
		// console.log(result);
		yield put(fetchMoviesSuccess(result));
	} catch (error) {
		console.log(error);
		yield put(fetchMoviesFailure(error));
	}
}

function* fetchMoviesWatcher() {
	yield takeLatest(fetchMoviesRequest, fetchMoviesFlow);
}

export default function*() {
	yield fork(fetchMoviesWatcher);
}

export { fetchMoviesFlow };
