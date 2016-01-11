import React from 'react';
import AddChannelPage from './partials/addChannelPage';


class AdminDashboard extends React.Component{
	constructor(){
		super();

		this.state = {
			showChannelDashboard: true,
			showUserDashboard: false
		}
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

					{this.state.showChannelDashboard ? <AddChannelPage /> : null}
				</div>
			)
	}
}


export default AdminDashboard;