import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './Main';
import Audience from './Audience';
import Speaker from './Speaker';
import Board from './Board';

const routes = (
	<Route component={Main}>
		<Route path="/" component={Audience} />
		<Route path="/audience" component={Audience} />
		<Route path="/speaker" component={Speaker} />
		<Route path="/board" component={Board} />
	</Route>
)


export default routes
