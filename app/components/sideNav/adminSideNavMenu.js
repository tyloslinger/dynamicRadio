import React from 'react';
import LogoSearchSideNav from './partials/logoSearchSideNav';
import AsideNavSwitch from './partials/asideNavSwitch';
import AsideNavMenuItem from './partials/asideNavMenuItem';

class AsideNav extends React.Component{

	render(){
		return(
				<aside id="nav-container">
					<LogoSearchSideNav />
					<div id="nav-wrapper" className="ng-scope">
						<AsideNavSwitch />
						<div className="slimScrollDiv" >
							<AsideNavMenuItem />
						</div>
					</div>
				</aside>
			)
	}
}


export default AsideNav;