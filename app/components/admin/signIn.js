import React from 'react';
import LoginComponent from './partials/signInComponent';
import Actions from '../../actions/appActions'

class SignIn extends React.Component{
	componentWillMount(){
		Actions.HIDE_TOPMENU();
	}
	componentWillUnmount(){
		Actions.SHOW_TOPMENU();
	}
	render(){
		return(

				<div className="page-signin">

					<div className="signin-header">
				        <div className="container text-center">
				            <section className="logo-signin">
				                <a href="#/"><i className="fa fa-3x color-primary fa-sign-in"></i></a>
				            </section>
				        </div>
				    </div>

					<div className="main-body">
				        <div className="container">
				            <div className="form-container">				            
				            	<LoginComponent userType={this.props.params.userType}/>
				            </div>
				        </div>
				    </div>

				</div>
			)
	}
}


export default SignIn;