import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import movies, { sagas as moviesSagas } from './Movies';
import shared, { sagas as updateItemsSagas } from './Shared';

// root Reducer
export default combineReducers({ movies, shared });

// root Saga
export function* rootSaga() {
	yield fork(moviesSagas);
	yield fork(updateItemsSagas);
}
