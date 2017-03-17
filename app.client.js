
import React, { Component } from 'react';
import { render } from 'react-dom';
// import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, IndexRoute, Link, browserHistory } from 'react-router-dom';
// Import custom components
import Main from './components/Main';
import Audience from './components/Audience';
import Speaker from './components/Speaker';
import Board from './components/Board';

render(
	<Router history={browserHistory}>
		<div className="yes">
			<p>here is some stuff about this paragraph</p>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/audience">Audience</Link></li>
				<li><Link to="/speaker">Speaker</Link></li>
				<li><Link to="/board">Board</Link></li>
				<li><Link to="/test">Test</Link></li>
			</ul>
			<hr />
			<Main>
				<Route path="/audience" component={Audience} />
				<Route path="/speaker" component={Speaker} />
				<Route path="/board" component={Board} />
				<Route path="/test" render={() => ( <h2>YO THIS IS A TEST</h2>)} />
			</Main>
		</div>
	</Router>,
	document.getElementById('react-container')
);
