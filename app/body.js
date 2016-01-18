import React from 'react';
import _ from 'underscore';

import AppStore from './stores/appStore';
import Flags from './flags';
import TopNav from './components/nav/topNav';
import AsideNavMenu from './components/sideNav/asideNavMenu';
import AdminSideNavMenu from './components/sideNav/adminSideNavMenu';


class Body extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showMenu: false
		}
		this._onChange = this._onChange.bind(this);
	}

	componentWillMount(){
		AppStore.addChangeListener( this._onChange );
	}

	componentWillUnmount(){
		AppStore.removeChangeListener( this._onChange );
	}

	_onChange(){
		this.setState({
			showMenu : AppStore.MenuStatus(),
			showMiniMenu : AppStore.MiniMenuStatus(),
			userObject : AppStore.CheckLoginStatus()
		});
	}

	render() {				
	    return (
	      	<div className={this.state.showMenu ? 	this.state.showMiniMenu ? "on-canvas nav-min" 
	      																  	: null
	      										: "body-special"}>      			
  				{ this.state.showMenu 
  					? 
  						this.userObject.userType === 'admin' 	?
  																	<div className="no-print">
											  							<AdminSideNavMenu />
											  						</div>
  															 	:
  															 		<div className="no-print">
											  							<AsideNavMenu />
											  						</div>

  					: null}      			
		      	<div className="view-container" ng-noName="nothing">  		      		
		      		{ this.state.showMenu 
		      			? <TopNav />
		      			: null}
					{this.props.children}	
				</div>		
			</div>
	    )
	}
}

export default Body;