import React from 'react';
import LoginComponent from './partials/loginComponent';

class AdminLogin extends React.Component{	
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
				            	<LoginComponent />

				            	<section>
				                    <p className="text-center"><a href="signin.html#/pages/forgot">Forgot your password?</a></p>
				                    <p className="text-center text-muted text-small">{"Don't"} have an account yet? <a href="signin.html#/pages/signup">Sign up</a></p>
				                </section>
				            </div>
				        </div>
				    </div>

				</div>
			)
	}
}


export default AdminLogin;