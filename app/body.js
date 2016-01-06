import React from 'react';

import Header from './header';
import Footer from './footer';

class Body extends React.Component{

	render(){
		return (
				<div>				
					<Header />
						{this.props.children}
					<Footer />
				</div>
			)
	}
}

export default Body;