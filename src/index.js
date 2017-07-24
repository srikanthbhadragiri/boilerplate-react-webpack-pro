'use strict';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Logo from './components/logo';

ReactDOM.render(
	<h1>
		<Logo />Welcome to my fav really App!
	</h1>,
	document.getElementById('root')
);
