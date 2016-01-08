import React from 'react';

import TopNav from './components/nav/topNav';
import AsideNavMenu from './components/sideNav/asideNavMenu';

class Body extends React.Component {

  render() {
    return (
      	<div className="ng-scope">
      		<div data-ng-hide="checkIfOwnPage()" className="no-print">
      			<AsideNavMenu />
      		</div>
	      	<div classNameName="view-container">  
	      		<TopNav />
				{this.props.children}	
			</div>		
		</div>
      )
  }
}

export default Body;