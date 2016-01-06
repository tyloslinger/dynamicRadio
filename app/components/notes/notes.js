import React from 'react';

class Notes extends React.Component{

	render(){
		console.log("notes: ", this.props.notes);
		return (
				<div>
					<h4>NOTES</h4>		

				</div>
			)
	}
}


export default Notes;