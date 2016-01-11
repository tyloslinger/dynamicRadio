import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from '../home';
import Body from '../body';
import AllChannels from '../components/channels/allChannels';
import ChannelDashboard from '../components/Dashboard/channelDashboard';
import SignIn from '../components/admin/adminLogin';
import SignUp from '../components/admin/signUp';
import AdminDashboard from '../components/setup/adminDashboard';


export default 	<Route path="/" component={Body}>
					<IndexRoute component={Home} showAsidemenu={false} showTopnav={false}/>
					<Route path="channelDashboard" component={ChannelDashboard} showAsidemenu={true} showTopnav={true} />
					<Route path="signIn" component={SignIn} showAsidemenu={false} showTopnav={false} />
					<Route path="signUp" component={SignUp} showAsidemenu={false} showTopnav={false}/>
					<Route path="setup" component={AdminDashboard} showAsidemenu={true} showTopnav={true} />
					<Route path="allChannels" component={AllChannels} showAsidemenu={true} showTopnav={true}/>
				</Route>