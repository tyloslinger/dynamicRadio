import React from 'react';
import {Router} from 'react-router';
import ReactDom from 'react-dom';

import Routes from './config/routes'


class Main extends React.Component {
	render(){
		return <div>Hello</div>
	}
}

ReactDom.render(
		<Router>
			{Routes}
		</Router>, 
		document.getElementById("root")
	)