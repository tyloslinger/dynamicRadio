const ChannelAPI = {
	//
	channels:[],
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
		if(ChannelAPI.channels.find(channel => channel.id === _channel.id) === undefined){
			ChannelAPI.channels.push(_channel)
		}
	},
	//
	_deleteChannel(channel){		
		ChannelAPI.channels.splice(ChannelAPI.channels.findIndex( i => i === channel), 1)		
	},
}

export default ChannelAPI;