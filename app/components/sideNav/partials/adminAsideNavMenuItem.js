import React from 'react';
import AsideNavMenuPlaylist from './asideNavPlaylist';


class AsideActionNavMenuItem extends React.Component{

	render(){
		return(
				<li id="user-menu" className="nav-item">
		            <a className="nav-link profile" href="#/artist-list">
		              <i className="icon fa fa-headphones"></i>
		              <span className="label helper-tooltip-measured">{this.props.navItem.name}</span>
		            </a>
	          	</li>
			)
	}
}

class AsideActionNavMenuList extends React.Component{
	constructor(){
		super();

		this.state = {
			menuActions: [{
				name: "create Categories"
			},
			{
				name: "Add Channels"
			},
			{
				name: "All"
			}]
		}
	}
	render(){
		return(
				<ul className="sidebar-nav-menu" data-highlight-active="" data-collapse-nav="">
					{this.state.menuActions.map(function(menuObj, index) {
						return <AsideActionNavMenuItem key={index} navItem={menuObj} />
					})}
				</ul>
			)
	}
}


class AdminAsideNavMenuItem extends React.Component{
	constructor(){
		super();

		this.state = {
			user:{
				name: "Anthony"				
			}
		}
	}
	render(){
		return(
				<div className="sidebar-nav-main navigation-menu-container" data-slim-scroll="">
					<div className="menu-navigation-menus" ng-show="navigation.navigationState.menu">
				      	<div className="nav-user-menu sidebar-nav-content">
				      		<AsideActionNavMenuList />
				      	</div>				      	
				    </div>
			    </div>
			)
	}
}


export default AdminAsideNavMenuItem;