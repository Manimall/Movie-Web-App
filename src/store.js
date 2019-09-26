import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';

const sagaMiddleWare = createSagaMiddleware();

const createAppStore = () => {
	const store = createStore(
		rootReducer,
		compose(
			applyMiddleware(sagaMiddleWare),
			window.__REDUX_DEVTOOLS_EXTENSION__
				? window.__REDUX_DEVTOOLS_EXTENSION__()
				: noop => noop,
		),
	);

	sagaMiddleWare.run(rootSaga);

	return store;
};

export default createAppStore;
