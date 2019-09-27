import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'normalize.css';
import {Provider} from "react-redux";
import createAppStore from "./store";

const store = createAppStore();
console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
