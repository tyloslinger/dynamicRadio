import React from 'react';
import AppStore from '../../../stores/appStore';
import AsideNavMenuPlaylist from './asideNavPlaylist';
import PlaylistQueue from './queuedPlaylist';




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
				name: "News Channels"
			},
			{
				name: "Artist Channels"
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


class AsideNavMenuItem extends React.Component{
	constructor(){
		super();

		this.state = {
			user:{
				name: "Anthony"				
			},
			menu: '',
			queue: 'hide'
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
		this.setState(AppStore.GetSwitchedMenu())
	}
	render(){
		return(
				<div className="sidebar-nav-main navigation-menu-container" data-slim-scroll="">
					<div className={`menu-navigation-menus ${this.state.menu}`} ng-show="navigation.navigationState.menu">
						<div className="nav-user-menu sidebar-nav-content">
					        <ul className="sidebar-nav-menu" data-highlight-active="">
					          <li id="user-menu" className="nav-item">
					            <div className="actions">
					              <a className="action-btn" href="#/dashboard">
					                <i className="action-icon fa fa-bell"></i>
					              </a>
					              <i id="user-settings-btn" className="action-icon fa fa-gear"></i>
					            </div>
					            <a className="nav-link profile" href="#/pages/profile">
					              <img src="../assets/images/user.png" alt="" className="img20_20 img-circle" />
					              <span className="label helper-tooltip-measured">{this.state.user.name}</span>
					            </a>

					          </li>
					          <li id="user-menu" className="nav-item">
					            <a className="nav-link profile" href="#/dashboard">
					              <i className="icon fa fa-inbox"></i>
					              <span className="label helper-tooltip-measured">Dashboard</span>
					            </a>

					          </li>
					        </ul>
				      	</div>
				      	<div className="nav-user-menu sidebar-nav-content">
				      		<AsideActionNavMenuList />
				      	</div>
				      	<div className="nav-user-menu sidebar-nav-content">
				      		<AsideNavMenuPlaylist />
				      	</div>
				    </div>	

				    <PlaylistQueue hide={this.state.queue}/>
			    </div>
			)
	}
}


export default AsideNavMenuItem;