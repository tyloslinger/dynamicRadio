import React from 'react';

class ControlComponents extends React.Component{

	render(){
		return(
				<section>
					<form className="form-horizontal">
	                    <div className="form-group">
	                        <div className="input-group">
	                            <span className="input-group-addon">
	                                <span className="glyphicon glyphicon-user"></span>
	                            </span>
	                            <input  type="text"
	                                    className="form-control"
	                                    placeholder="User name"
	                                    />
	                        </div>
	                    </div>
	                    <div className="form-group">
	                        <div className="input-group">
	                            <span className="input-group-addon">
	                                <span className="glyphicon glyphicon-envelope"></span>
	                            </span>
	                            <input type="email"
	                                   className="form-control"
	                                   placeholder="Email"
	                                   />
	                        </div>
	                    </div>
	                    <div className="form-group">
	                        <div className="input-group">
	                            <span className="input-group-addon">
	                                <span className="glyphicon glyphicon-lock"></span>
	                            </span>
	                            <input type="password"
	                                   className="form-control"
	                                   placeholder="Password"
	                                   />
	                        </div>
	                    </div>

	                    <div className="form-group">
	                        <p className="text-muted text-small">By clicking on Sign up, you agree to <a href="javascript:;">terms & conditions</a> and <a href="javascript:;">privacy policy</a></p>
	                        <div className="divider"></div>
	                        <a href="#/allChannels" className="btn btn-primary btn-block btn-lg">Sign up</a>
	                    </div>

	                </form>
                </section>
			)
	}
}

class SignUpHeader extends React.Component{

	render(){
		return(
				<div className="signin-header">
			        <div className="container text-center">
			          <section className="logo-signin">
			            <a href="#/"><i className="fa fa-3x color-primary fa-user"></i></a>
			          </section>
			        </div>
			    </div>
			)
	}
}

class SignUpComponent extends React.Component{

	render(){
		return(
				<div className="page-signup">
					<SignUpHeader />
					<div className="main-body">
	        			<div className="container">
	            			<div className="form-container">
	            				<ControlComponents />

	            				<section>
				                    <p className="text-center text-muted">Already have an account? 
				                    	<a href="#/allChannels" >Log in now</a>
			                    	</p>
				                </section>
	            			</div>
	        			</div>
	    			</div>
    			</div>
			)
	}
}


export default SignUpComponent;