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
										displayStatus: 'playing',
										_status: 'pause', 
										active: _channelObj.active,
										preStream: _channelObj.preStream
									};									
			break;
		}
	},
	_streamChannel(_channelObj){		
		//ChannelAPI.howl = _channelObj._howl;
		ChannelAPI.channelObj = _channelObj;		

		switch(_channelObj._status){
			case 'init':
				ChannelAPI._status = {
										displayStatus: 'playing',
										_status: 'pause', 
										active: _channelObj.active
									};
				ChannelAPI._initChannel(_channelObj);
			break;
			case 'play':
				//if(_channelObj.channel.channelId === ChannelAPI.currentChannelId){
					console.log("said play me")
					ChannelAPI.howl.play();				
					ChannelAPI._status = {
											displayStatus: 'playing',
											_status: 'pause'
										};
				//}
			break;
			case 'pause':
				console.log("said pause me")
				ChannelAPI.howl.pause();
				ChannelAPI._status = {
										displayStatus: 'paused',
										_status: 'play'
									};
			break;
			case 'unload':
				if(ChannelAPI.howl.urls != undefined){
					ChannelAPI.howl.unload();
				}
				ChannelAPI.howl = howler;
				console.log("howl obj reset: ", ChannelAPI.howl);
				ChannelAPI._status = {
										displayStatus: 'playing',
										_status: 'play'
									};
			break;			
		}		
	},
	//
	_initChannel(_channelObj){
		if(_channelObj.channel.channelId != ChannelAPI.currentChannelId){			
			ChannelAPI._streamChannel({_status: 'unload'});

			ChannelAPI.howl = new Howl({
				urls: _channelObj.channel.channelUrls,
				autoplay: false,
				buffer: true,
				format: "mp3",
				onload:function(){
					ChannelAPI._status = {
											displayStatus: 'loading',
											_status: 'play'
										};
					ChannelAPI._streamChannel({_status: 'play'});					
				},
				onplay: function(){		
					ChannelAPI._status = {
											displayStatus: 'playing',
											_status: 'pause'
										};	
					if(_channelObj.channel.channelId != ChannelAPI.currentChannelId){
						console.log("not equal");
						Action.STREAM_CHANNEL({_status:'playing'});					
					}
					ChannelAPI.currentChannelId = _channelObj.channel.channelId;
				},
				onloaderror:function(_error){					
					ChannelAPI.loaded = false;
					ChannelAPI._status = {
											displayStatus: 'error',
											_status: 'pause'
										};
					//Action.STREAM_CHANNEL({_status:'error'});
				},				
				onend:function(){				
				}
			})				
		}else{
			console.log("same channel: prev==: %s....new==: %s do nothing", ChannelAPI.currentChannelId, _channelObj.channel.channelId)
		}
	},
	//
	_getChannelStatus(_channelId){
		ChannelAPI._status.preStream = !ChannelAPI._status.preStream;		
		return ChannelAPI._status;
	}
}

export default ChannelAPI;