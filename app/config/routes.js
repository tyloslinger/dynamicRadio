import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from '../home';
import Body from '../body';
import AllChannels from '../components/channels/allChannels';
import ChannelDashboard from '../components/Dashboard/channelDashboard';
import SignIn from '../components/admin/signIn';
import SignUp from '../components/admin/signUp';
import AdminDashboard from '../components/setup/adminDashboard';


export default 	<Route path="/" component={Body}>
					<IndexRoute component={Home} />
					<Route path="channelDashboard" component={ChannelDashboard} />
					<Route path="signIn/:userType" component={SignIn} />
					<Route path="signUp/:number" component={SignUp} />
					<Route path="setup" component={AdminDashboard} />
					<Route path="allChannels" component={AllChannels} />
				</Route>