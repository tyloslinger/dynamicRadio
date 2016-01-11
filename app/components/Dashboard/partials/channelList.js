import React from 'react';
import ChannelItem from './channelItem';

class ChannelList extends React.Component{
	constructor(){
		super();

		this.state = {
			repeater: [1,2,3,4]
		}
	}
	render(){
		return(

				<div className="row music-covers-listing">
					{this.state.repeater.map(function(channelObj, index) {
						return 	<div key={index} className="col-md-4">					
									 <ChannelItem key={index}/>
								</div>
					})}	
				</div>			
			)
	}
}


export default ChannelList;