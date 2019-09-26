import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure } from "../Movies";
import {getMovies} from "../Movies/api";
import { updateItemsRequest, updateItemsSuccess } from "./actions";


function* fetchMoviesUpdateFlow ({payload}) {
	try {
		console.log(payload);
		const result = yield call(getMovies, payload);
		console.log(result);
		// yield put(fetchMoviesSuccess(result));
		yield put(updateItemsSuccess(result));
	} catch (error) {
		console.log(error);
		yield put(fetchMoviesFailure(error));
	}
}

function* fetchMoviesUpdateWatcher() {
	yield takeLatest(fetchMoviesRequest, fetchMoviesUpdateFlow);
}

export default function*() {
	yield fork(fetchMoviesUpdateWatcher);
}

export { fetchMoviesUpdateFlow };