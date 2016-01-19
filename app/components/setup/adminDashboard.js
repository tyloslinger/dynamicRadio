import React from 'react';
import Actions from '../../actions/appActions';
import DashBoardSetup from './partials/dashboardSetup';

class AdminDashboard extends React.Component{
	constructor(){
		super();
	}
	componentWillMount(){
		Actions.SHOW_TOPMENU();
	}
	componentWillUnmount(){
		Actions.HIDE_TOPMENU();
	}
	render(){
		return(				
				<div className="page page-general two-column" style={{width:"100%"}}>
					<div className="signin-header">
				        <div className="container text-center">
				            <section className="logo-signin">
				                <a href="#/"><i className="fa fa-3x color-primary fa-sign-in"></i></a>
				            </section>
				        </div>
				    </div>
					<DashBoardSetup />
				</div>
			)
	}
}


export default AdminDashboard;