import React from 'react';
import NavActions from './partials/navActions';

class TopNav extends React.Component{

	render(){
		return(
				<div className="no-print">
					<section id="header" className="top-header">
						<NavActions />
					</section>
				</div>
			)
	}
}


export default TopNav;