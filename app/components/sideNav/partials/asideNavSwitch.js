import React from 'react';


class AsideNavSwitch extends React.Component{

	render(){
		return(
				<div className="sidebar-nav-switch">

			    <div className="btn-group switch">

			      <a className="btn main-nav-link home active" data-nav-section="home" data-ng-click="navigation.SwitchToMenu()">
			        <span className="label">BROWSE</span>
			      </a>

			      <a className="btn main-nav-link queue" data-nav-section="queue" data-ng-click="navigation.SwitchToPlaylist()">
			        <span className="label queue-label">
			            <span>QUEUE</span><span className="songs ng-hide" ng-show="mediaPlayer.tracks > 0"> 
			            <span className="badge badge-primary ng-binding">0</span></span>
			        </span>
			      </a>

			    </div>

			  </div>
			)
	}
}


export default AsideNavSwitch;