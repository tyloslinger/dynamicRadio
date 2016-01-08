import React from 'react';


class NotificationNavAction extends React.Component{

	render(){
		return(
				<ul className="nav-button pull-right list-unstyled header-actions">
				    <li className="">
				      <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
				        <i className="fa fa-bell color-default"></i>
				      </a>

				      <div className="dropdown-menu pull-right with-arrow panel panel-default">
				        <div className="panel-heading">
				          You have 2 notifications.
				        </div>
				        <ul className="list-group">
				          <li className="list-group-item">
				            <a href="javascript:;" className="media">
				                                    <span className="pull-left media-icon">
				                                        <span className="circle-icon sm bg-info"><i className="fa fa-comment-o"></i></span>
				                                    </span>

				              <div className="media-body">
				                <span className="block">Jane sent you a message</span>
				                <span className="text-muted">3 hours ago</span>
				              </div>
				            </a>
				          </li>
				          <li className="list-group-item">
				            <a href="javascript:;" className="media">
				                                    <span className="pull-left media-icon">
				                                        <span className="circle-icon sm bg-danger"><i className="fa fa-comment-o"></i></span>
				                                    </span>

				              <div className="media-body">
				                <span className="block">Lynda sent you a mail</span>
				                <span className="text-muted">9 hours ago</span>
				              </div>
				            </a>
				          </li>
				        </ul>
				        <div className="panel-footer">
				          <a href="javascript:;">Show all messages.</a>
				        </div>
				      </div>
				    </li>
				  <li>
				    <a href="javascript:;" data-ng-click="actions.toggleChat()" tooltip-placement="left" tooltip="Toggle chat" tooltip-append-to-body="true">
				      <i className="fa fa-comments-o color-default"></i>
				    </a>
				  </li>
				</ul>
			)
	}
}

class TopNavFixer extends React.Component{

	render(){
		return(
				<ul className="nav-left list-unstyled">
				    <li>				        
				        <div className="menu-button" toggle-off-canvas="">
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				            <span className="icon-bar"></span>
				        </div>
				    </li>				   
				</ul>
			)
	}
}


class ProfileNavAction extends React.Component{

	render(){
		return(
				<ul className="nav-button pull-right list-unstyled">
				    <li className="dropdown text-small nav-profile">
				        <a href="javascript:;" className="dropdown-toggle text-muted" data-toggle="dropdown" aria-expanded="false">
				            <img src="../assets/images/user.png" alt="" className="img30_30" />
				        </a>

				        <div className="dropdown-menu pull-right with-arrow panel panel-default">

				          <ul className="list-group">
				            <li className="list-group-item">
				              <a href="#/pages/profile" className="media">
				                <span className="block"><i className="fa fa-user color-secondary"></i>My profile</span>
				              </a>
				            </li>
				            <li className="list-group-item">
				              <a href="#/pages/signin" className="media">
				                <span className="block"><i className="fa fa-lock color-secondary"></i>Lock screen</span>
				              </a>
				            </li>
				            <li className="list-group-item">
				              <a href="#/pages/signin" className="media">
				                <span className="block"><i className="fa fa-sign-out color-secondary"></i>Sign out</span>
				              </a>
				            </li>
				            <li className="list-group-item">
				              <a href="#/pages/forgot" className="media">
				                <span className="block"><i className="fa fa-envelope color-secondary"></i>Recover password</span>
				              </a>
				            </li>
				          </ul>
				          <div className="panel-footer">
				            <a href="javascript:;">Show all notifications.</a>
				          </div>
				        </div>
				    </li>
				</ul>
			)
	}
}


class NavActions extends React.Component{

	render(){
		return(
				<header className="clearfix ng-scope">
					<div className="top-nav">
						<TopNavFixer />
						<NotificationNavAction />
						<ProfileNavAction />
					</div>
				</header>
			)
	}
}


export default NavActions;