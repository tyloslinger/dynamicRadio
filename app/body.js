import React from 'react';
import _ from 'underscore';

import Flags from './flags';
import TopNav from './components/nav/topNav';
import AsideNavMenu from './components/sideNav/asideNavMenu';



var display = {
		showTopnav : true,
		showAsidemenu : true
	};

var DisplayMenu = function(viewObject){
	if(viewObject != null){	  	
			var location = viewObject.props.route.path;			
			var displayObject = _.find(viewObject.props.routes, function(obj){return obj.path === location});		
			
			display.showAsidemenu = displayObject.showAsidemenu;
			display.showTopnav = displayObject.showTopnav;				
		}else{			
			display.showAsidemenu = true;
			display.showTopnav = true;
		}
	}

class Body extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			showTopnav: true,
			showAsidemenu: true,			
			showMiniMenu: false,
			bodyClass: "body-special "
		}		

		this.activateMiniMenu = this.activateMiniMenu.bind(this);
	}

	componentDidMount() {
		DisplayMenu(this.props.children);
	 	this.setState({
					showTopnav : display.showTopnav,
					showAsidemenu : display.showAsidemenu
				});
	}
	
	componentWillReceiveProps (nextProps) {	
	 	DisplayMenu(nextProps.children);
	 	this.setState({
					showTopnav : display.showTopnav,
					showAsidemenu : display.showAsidemenu
				});
	}
	
	activateMiniMenu(){
		this.setState({
			showMiniMenu : !this.state.showMiniMenu,			
		})

		this.setState({
			bodyClass: this.state.showMiniMenu 
				? this.state.bodyClass + " on-canvas nav-min" 
				: "body-special " 
		})

		console.log(this.state.bodyClass);
	}

	render() {				
	    return (
	      	<div className={this.state.showTopnav ? null: "body-special"} >
	      		{this.state.showTopnav 
	      			? 
		      			<div className="no-print">
		      				{this.state.showAsidemenu ? <AsideNavMenu /> : null}
		      			</div> 
	      			: null}
		      	<div className="view-container" ng-noName="nothing">  		      		
		      		{this.state.showTopnav ? <TopNav activateMenu={this.activateMiniMenu}/> : null}
					{this.props.children}	
				</div>		
			</div>
	    )
	}
}

export default Body;