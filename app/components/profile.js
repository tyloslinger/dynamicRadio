import React from 'react';
import Mixin from 'react-mixin';
import FirebaseMixin from 'reactfire';
import Firebase from 'firebase';

import UserProfile from '../components/github/userProfile';
import Repos from '../components/github/repos';
import Notes from '../components/notes/notes';


var tester = React.createClass({
	mixins: [FirebaseMixin],
	componentDidMount() {
		console.log(this)
	},
	render:function(){
		return <div></div>
	}
})

class Profile extends React.Component{
	constructor(){	
		super();
		this.state = {			
			notes: [1,2,3],
			bio: {
				name: 'tylos linger'
			},
			repos: ['a','b','c']
		}
	}

	componentDidMount() {
		this.ref = new Firebase('https://blazing-torch-5198.firebaseio.com/')		
		var childRef = this.ref.child(this.props.params.username);
		this.bindAsArray(childRef, 'notes');
	}

	componentWillUnmount() {
		this.unbind('notes');
	}

	render(){		
		return(
				<div className="row">
				{this.props.params.username}					
					<div className="col-md-4">
						<UserProfile username={this.props.params.username}
							name={this.state.bio.name}/>
					</div>
					<div className="col-md-4">
						<Repos username={this.props.params.username}
						 	repos={this.state.repos} />
					</div>
					<div className="col-md-4">
						<Notes username={this.props.params.username}
							notes={this.state.notes} />
					</div>
				</div>				
			)
	}
}

Mixin(Profile.prototype, FirebaseMixin);

export default Profile;
