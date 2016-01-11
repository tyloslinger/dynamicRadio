import React from 'react';


class AsideNavMenuPlaylist extends React.Component{

	render(){
		return(
				<div className="nav-user-menu sidebar-nav-content">

			        <div className="sidebar-nav-content__header">
			        <span>
			          Your playlists
			        </span>
			        </div>

			        <ul className="sidebar-nav-menu" data-highlight-active="">
			          <li id="user-menu" className="nav-item">
			            <a className="nav-link profile" href="javascript:;" >
			              <i className="icon fa fa-plus-circle"></i>
			              <span className="label helper-tooltip-measured">Create a playlist</span>
			            </a>

			          </li>			          

			        </ul>

			      </div>
			)
	}
}


export default AsideNavMenuPlaylist;