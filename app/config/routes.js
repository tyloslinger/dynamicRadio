import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from '../components/home';
import Body from '../body';
import ChannelDashboard from '../components/Dashboard/channelDashboard';

export default 	<Route path="/" component={Body}>
					<IndexRoute component={ChannelDashboard} />
				</Route>