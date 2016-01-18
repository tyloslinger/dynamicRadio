import React from 'react';
import LogoSearchSideNav from './partials/logoSearchSideNav';
import AsideNavSwitch from './partials/asideNavSwitch';
import AdminAsideNavMenuItem from './partials/adminAsideNavMenuItem';

class AdminSideNav extends React.Component{

	render(){
		return(
				<aside id="nav-container">
					<LogoSearchSideNav />
					<div id="nav-wrapper" className="ng-scope">						
						<div className="slimScrollDiv" >
							<AdminAsideNavMenuItem />
						</div>
					</div>
				</aside>
			)
	}
}


export default AdminSideNav;