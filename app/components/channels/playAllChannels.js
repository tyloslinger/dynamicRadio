import React from 'react';
import Actions from '../../actions/appActions';
import AppStore from '../../stores/appStore';
import PlayChannel from './partials/playChannel';

class PlayAllChannels extends React.Component{	
	componentWillMount() {
		Actions.SHOW_TOPMENU();
	}	
	render(){
		return(
				<section data-ng-view="" id="content" className="animate-fade-up fixed" >
				    <PlayChannel />						    
			    </section>				
			)
	}
}

export default PlayAllChannels;