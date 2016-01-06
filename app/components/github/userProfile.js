import React from 'react';

class UserProfile extends React.Component{

	render(){
		return (
				<div>
					<h4>USERNAME</h4>
					<div>Username: {this.props.username}</div>
					<div>Bio: {this.props.name}</div>
				</div>
			)
	}
}

export default UserProfile;