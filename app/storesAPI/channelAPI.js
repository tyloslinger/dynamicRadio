import Action from '../actions/appActions';

const ChannelAPI = {
	//

	channels: [],	
	currentChannel: null,
	channelPlaylist: [],
	howl: null,
	channelObj: null,
	loaded: false,

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
	_deleteChannel(_channel){		
		ChannelAPI.channels.splice(ChannelAPI.channels.findIndex( id => id === _channel), 1);
	},
	//
	_deleteFromChannelPlaylist(channelId){
		ChannelAPI.channelPlaylist.splice(ChannelAPI.channelPlaylist.findIndex( _channel => _channel.channelId === channelId), 1);
	},
	_streamChannel(_channelObj){		
		ChannelAPI.howl = _channelObj._howl;
		ChannelAPI.channelObj = _channelObj;		

		ChannelAPI.howl = new Howl({
			urls: _channelObj.channel.channelUrls,
			autoplay: false,
			buffer: true,
			format: "mp3",
			onload:function(){				
				ChannelAPI.loaded = true;
				Action.STREAM_CHANNEL({init: false});
			},
			onloaderror:function(_error){				
				ChannelAPI.loaded = false
			},
			onend:function(){				
			}
		})
	},
	_getChannelStatus(_channelId){		
		return {_howl: ChannelAPI.howl, loaded: ChannelAPI.loaded};
	}
}

export default ChannelAPI;