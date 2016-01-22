import React from 'react';


class ChannelMedia extends React.Component{

	render(){
		return(
				<audio media-player="mediaPlayer" playlist="generalPlaylist.audioPlaylist">
					<source src="http://ccmixter.org/content/snowflake/snowflake_-_I_Miss_You.mp3" type="audio/mpeg"/>
				</audio>
			)
	}
}


export default ChannelMedia;