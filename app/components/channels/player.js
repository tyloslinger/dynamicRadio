import React from 'react';
import PlayerControls from './partials/playerControls';

class Player extends React.Component{	
	render(){
		return(
				<div className="player-region hide">
				    <div>
				    	<PlayerControls />
				    </div>
			    </div>
			)
	}
}


export default Player;