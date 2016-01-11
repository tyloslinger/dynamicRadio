import React from 'react';


class LogoSearchSideNav extends React.Component{

	render(){
		return(
				<div className="logo">
				  <a className="logo-link" href="#/">
				    <i className="logo-icon fa fa-headphones"></i>				    
				  </a>

				  <div className="form-group logo-search">
				    <div>
				      <input type="text" className="form-control" placeholder="Search site" />
				      <span className="icon glyphicon glyphicon-search"></span>
				    </div>
				  </div>
				</div>
			)
	}
}


export default LogoSearchSideNav;