const ChannelAPI = {
	//
	channels: [],	
	currentChannel: null,
	channelPlaylist: [],

	//
	_getChannels(category){
		if(category === undefined){			
			return ChannelAPI.channels;
		}else{
			var temp = [];
			ChannelAPI.channels.forEach((channel) => {
				if(channel.catName === category.catName){temp.push(channel)}
			})

			return temp;
		}
	},
	//
	_addNewChannel(_channel){		
		if(ChannelAPI.channels.find(channel => channel.channelName === _channel.channelName) === undefined){
			ChannelAPI.channels.push(_channel)
		}
	},
	_addToChannelPlaylist(_channel){
		if(ChannelAPI.channelPlaylist.find(channel => channel.channelId === _channel.channelId) === undefined){			
			ChannelAPI.currentChannel = _channel;
			ChannelAPI.channelPlaylist.push(_channel);
		}
	},
	//
	_deleteChannel(channel){		
		ChannelAPI.channels.splice(ChannelAPI.channels.findIndex( id => id === channel), 1);
	},
	//
	_deleteFromChannelPlaylist(cahnnelId){
		ChannelAPI.channelPlaylist.splice(ChannelAPI.findIndex( id => id === channelId), 1);
	}
}

export default ChannelAPI;