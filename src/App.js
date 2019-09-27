import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Home from "./components/screens/Home";
import Movie from "./components/screens/Movie";


const App = () => (
	<BrowserRouter>
		<Header />
		<Switch>
			<Route path={'/'} component={Home} exact />
			<Route path={'/:movieId'} component={Movie} exact />
			{/*<Route path={'/actor/:actorId'} component={Actor} exact />*/}
			{/*<Route to={NotFound} />*/}
		</Switch>
	</BrowserRouter>
);

export default App;
