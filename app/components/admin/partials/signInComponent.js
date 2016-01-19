import React from 'react';
import Actions from '../../../actions/appActions'
import AppStore from '../../../stores/appStore';
import { Router, Navigation } from 'react-router';


class ControlComponents extends React.Component{
    constructor(){
        super(); 
        this.state = {
            phoneNumber: '233'
        }       

        this.signIn = this.signIn.bind(this);
        this.phoneNumberChange = this.phoneNumberChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.pwdChange = this.pwdChange.bind(this);
    }

    phoneNumberChange(e){
        this.setState({
            phoneNumber: e.target.value
        })
    }
    emailChange(e){
        this.setState({
            email: e.target.value
        })
    }
    pwdChange(e){
        this.setState({
            password: e.target.value
        })
    }

    signIn(){
        Actions.LOGIN({
            userType: this.props.userType,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
            email: this.state.email
        })        
    }

    render(){
        return(            
                <fieldset>

                    {this.props.userType === 'admin'
                        ?
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-envelope"></span>
                                    </span>
                                    <input type="text"
                                           className="form-control"
                                           placeholder="Email" 
                                           onChange={this.emailChange}/>
                                </div>
                            </div>
                        :
                            null}
                    
                    {this.props.userType === 'admin'
                        ?
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <span className="glyphicon glyphicon-lock"></span>
                                    </span>
                                    <input type="password"
                                       className="form-control"
                                       placeholder="Password" />
                               </div>
                            </div>
                        :          
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <span className="fa fa-phone"></span>
                                    </span>                  
                                    <input type="text"
                                       className="form-control"
                                       placeholder="Phone Number" 
                                       onChange={this.phoneNumberChange}/>
                                </div>
                            </div>
                           }                        
                    
                    <div className="form-group">
                        <a href='#/setup' className="btn btn-primary btn-lg btn-block"
                                onClick={this.signIn}>Log in</a>
                    </div>
                </fieldset>
            )
    }
}



class SignInContainer extends React.Component{
    constructor(){
        super();        
        this.state = {
            loginProcessed: false
        }
        this._onChange = this._onChange.bind(this);
    }
    componentWillMount(){
        AppStore.addChangeListener(this._onChange);
    }
    componentWillUnmount(){
        AppStore.removeChangeListener(this._onChange);
    }
    _onChange(){
        this.setState({
            userObject: AppStore.CheckLoginStatus()
        });
    }    
    componentDidUpdate(){
        
    }
    render(){        
        return(
                <div >
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-3 col-sm-3 col-md-3"></div>
                            <div className="col-xs-6 col-sm-6 col-md-6">  
                                {this.state.loginProcessed && !this.state.status 
                                    ?
                                        <div className="text-center">
                                            <p>Login Failed</p>
                                        </div>                              
                                    : null}                                
                                <div className="text-center">                                    
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum condimentum magna, vel cursus turpis fermentum vel. Lorem 
                                        Vivamus diam diam, fermentum eros. Vivamus diam diam, fermentum sed.                                     
                                    </p>
                                </div>
                                <div className="text-center">
                                    <h3>SIGN IN</h3>
                                </div>                              
                                <ControlComponents userType={this.props.userType}/>                                                               
                            </div>
                            <div className="col-xs-3 col-sm-3 col-md-3"></div>
                        </div>
                    </div>
                </div>
            )
    }
}

class SignInComponent extends React.Component{
	render(){
		return(
				<section id="content" className="animate-fade-up">
                    <div className="page-front">
                        <div className="hero-container">                            
                            <SignInContainer userType={this.props.userType}/>                            
                        </div>
                    </div>
                </section>
			)
	}
}

export default SignInComponent;