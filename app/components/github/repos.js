import React from 'react';


class Repos extends React.Component{

	render(){
		return(
				<div>
					<h4>REPOS</h4>
					<div>repos: {this.props.repos}</div>
				</div>
			)
	}
}


export default Repos;