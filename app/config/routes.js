import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Home from '../components/home';
import Body from '../body';
import Profile from '../components/profile';

export default 	<Route path="/" component={Body}>
					<IndexRoute component={Home} />
					<Route path="profile/:username" component={Profile} />
				</Route>