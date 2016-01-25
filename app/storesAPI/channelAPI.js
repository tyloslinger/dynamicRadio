import Action from '../actions/appActions';
import howler from 'howler';

const ChannelAPI = {
	//

	channels: [],	
	currentChannel: null,
	channelPlaylist: [],
	howl: howler,
	channelObj: null,
	loaded: false,
	currentChannelId: '',
	_status: null,


	_updateWorker(val){
		ChannelAPI._status.worker = val;
	},
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
	_preStreamingChannel(_channelObj){			
		switch(_channelObj._status){
			case 'init':				
				ChannelAPI._status = {										
										_status: {_status:_channelObj._status, displayStatus: 'loading'}, 
										active: _channelObj.active,
										preStream: -1,
										worker: 2
									};									
			break;
		}
	},
	///
	_streamChannel(_channelObj){	
		console.log("stream obj: ",_channelObj)
		switch(_channelObj._status){				
			case 'init':
				console.log("said init me");
				ChannelAPI._status = {
						displayStatus: 'loading',
						_status: 'play',
						active: _channelObj.active
					}
				ChannelAPI._initChannel(_channelObj);				
			break;
			case 'play':				
					console.log("said play me")
					ChannelAPI._status = {
						displayStatus: 'playing',
						_status: 'pause',
						active: ChannelAPI.currentChannelId
					}
					ChannelAPI.howl.play();					
			break;
			case 'pause':
				console.log("said pause me")
				ChannelAPI.howl.pause();
				ChannelAPI._status = {
						displayStatus: 'paused',
						_status: 'play',
						active: ChannelAPI.currentChannelId
					};
			break;
			case 'unload':
				console.log("said unload me")

				if(ChannelAPI.howl.urls != undefined){
					ChannelAPI.howl.unload();
				}

				ChannelAPI.howl = howler;
				console.log("howl obj reset: ", ChannelAPI.howl);				
			break;			
		}		
	},
	//
	_initChannel(_channelObj){			
		if(_channelObj.channel.channelId != ChannelAPI.currentChannelId){			
			ChannelAPI.currentChannelId = _channelObj.active;
			ChannelAPI._streamChannel({_status: 'unload'});

			ChannelAPI.howl = new Howl({
				urls: _channelObj.channel.channelUrls,
				autoplay: false,
				buffer: true,
				format: "mp3",
				onload:function(){					
					ChannelAPI._streamChannel({_status: 'play'});
				},
				onplay: function(){					
					console.log("Playing:  not equal");					
					try{Action.STREAM_CHANNEL("dispatch for playing now");}catch(e){}
				},
				onloaderror:function(_error){
					console.log("error:  not equal");
					// ChannelAPI._status = {
					// 	displayStatus: 'error',
					// 	_status: 'play',
					// 	active: ChannelAPI.currentChannelId
					// };
					// try{Action.STREAM_CHANNEL("dispatch for error");}catch(e){}
				},				
				onend:function(){	
					console.log("ended:  not equal");			
				}
			})				
		}else{
			console.log("same channel: prev==: %s....new==: %s do nothing", ChannelAPI.currentChannelId, _channelObj.channel.channelId)
		}
	},
	//
	_getChannelStatus(_channelId){		
		return ChannelAPI._status;
	}
}

export default ChannelAPI;