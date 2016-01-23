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
		Action.HIDE_TOPMENU();
	}
	componentWillUnmount(){		
		Action.SHOW_TOPMENU();	
	}
	render(){
		return <SignUpComponent />			
	}
}


export default SignUp;