
import React, { Component } from 'react';
import { render } from 'react-dom';
// import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, IndexRoute, Link, browserHistory } from 'react-router-dom';
// Import custom components
import Main from './components/Main';
// import Audience from './components/Audience';
// import Speaker from './components/Speaker';
// import Board from './components/Board';

render(
	<Main />,
	document.getElementById('react-container')
);
