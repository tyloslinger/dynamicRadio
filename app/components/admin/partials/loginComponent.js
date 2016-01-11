import React from 'react';

class EmailBox extends React.Component{

	render(){
		return(
				<div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <span className="glyphicon glyphicon-envelope"></span>
                        </span>
                        <input type="email"
                               className="form-control"
                               placeholder="Email" />
                    </div>
                </div>
			)
	}
}

class PasswordBox extends React.Component{

	render(){
		return(
				<div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <span className="glyphicon glyphicon-lock"></span>
                        </span>
                        <input type="password"
                               className="form-control"
                               placeholder="password" />
                    </div>
                </div>
			)
	}
}

class LoginComponent extends React.Component{

	render(){
		return(
				<form className="form-horizontal">
                    <fieldset>
                    	<EmailBox />
                    	<PasswordBox />

                    	<div className="form-group">
                        </div>
                        <div className="form-group">
                            <a href="#/channelDashboard" className="btn btn-primary btn-lg btn-block">Log in</a>
                        </div>
                    </fieldset>
                </form>
			)
	}
}

export default LoginComponent;