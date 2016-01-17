import React from 'react';
import SignUpComponent from './partials/singUpComponent';
import Action from '../../actions/appActions';

class SignUp extends React.Component{
	constructor(){
		super();
		this.state = {
			showMenu: false
		}		
	};
	componentWillMount(){
		console.log("calling showMenu from SignUp Page: ");
		Action.HIDE_TOPMENU();
	}
	componentWillUnmount(){
		console.log("calling showMenu from SignUp Page: ");
			Action.SHOW_TOPMENU();	
	}
	render(){
		return <SignUpComponent />			
	}
}


export default SignUp;