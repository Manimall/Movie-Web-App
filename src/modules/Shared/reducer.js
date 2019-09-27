import { handleActions } from 'redux-actions';
import { updateItems } from "./actions";
import {combineReducers} from "redux";

const isLoading = handleActions({
	[updateItems]: () => true,
}, false);

const data = handleActions({
	[updateItems]: (state, { payload }) => {
		console.log(state);
		console.log(payload);
		const { loadMore } = payload;
		return loadMore ? [...data] : [];
	}
}, []);


export default combineReducers({
	isLoading,
	data,
	// searchTerm,
});

