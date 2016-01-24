import React from 'react';
import AppStore from '../../../stores/appStore';
import Action from '../../../actions/appActions';
import ChannelActivity from './channelActivity';
import howl from 'howler';


class ChannelRow extends React.Component{
	constructor(){
		super();
		this.state = {
			status: 'init',
			displayStatus: undefined,
			currentChannelId: '',
			_status : null
		}
	}	
	componentWillReceiveProps(nextProps, nextContext){						
		if(this.state.currentChannelId === nextProps.data.channelId){			
			console.log("next props: ", nextProps, " current: ", this.state.currentChannelId);
			this.setState({displayStatus: nextProps.displayStatus});
		}
	}
	componentWillUpdate(){

	}
	_playPause(action, _channel){		
		switch(action){
			case "play":
				if(this.state.currentChannelId != _channel.channelId){
					Action.STREAM_CHANNEL({channel: _channel, status: 'play'});
					this.setState({displayStatus: 'paused', currentChannelId: _channel.channelId});
				}
			case "init":
				Action.STREAM_CHANNEL({channel: _channel, status: 'init'});
				this.setState({displayStatus: 'loading', currentChannelId: _channel.channelId});
			break;
			case "pause":				
				Action.STREAM_CHANNEL({channel: _channel, status: 'pause'});
				this.setState({displayStatus: 'playing', currentChannelId: _channel.channelId});
			break;
		}			
	}
	render(){			
		return(
				<div className="music-listing__row ng-scope">

	                <div className="play-button">	                    
	                    <button className="btn btn-primary" onClick={this._playPause.bind(this, this.state.status, this.props.data)}>
	                    	{(this.state.displayStatus === undefined || this.state.displayStatus === 'paused') 
	                    		?
	                    			<i className="fa fa-play"></i>
	                    		:
	                    			this.state.displayStatus === 'playing'
	                    				?
	                    					<i className="fa fa-pause"></i>
	                    				:
	                    					this.state.displayStatus === 'loading'
	                    						?
	                    							<img src="../assets/images/loader.gif" width="20px" height="20px"/>
	                    						: 	null}	                    	
	                    </button>
	                    &nbsp;&nbsp;
	                    <a type="button" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
	                    	<i className="fa fa-book action"></i>
	                    </a>
	                    &nbsp;&nbsp;
	                    <a>
	                    	<i className="fa fa-heart action" title="Add to Favorites"></i>
	                    </a>
	                </div>

	                <div className="music-listing__name">
	                  <div className="music-listing__thumbnail">
	                    <img src={this.props.data.channelImg} alt="song__image"/>
	                  </div>	                             
	                </div>
	            </div>
			)
	}
}


class ChannelWrapper extends React.Component{	
	render(){
		return(
				<div className="album-wrapper">

					<div className="col-md-8">
	                <div className="album_image">
	                    <img src={this.props.data.channelImg} alt="album image"/>
	                </div>

	                <div className="album_name">                    
	                    <h4 className="ng-binding">
	                      {this.props.data.channelName}
	                    </h4>  
	                    <p>{this.props.data.category}</p>                  
	                </div>                  
	                </div>

	                <div className="col-md-4">
                  	<ChannelRow data={this.props.data} streamObj={this.props.streamObj}
                  		_status={this.props._status}/>
                  	</div>
                </div>
			)
	}
}


class PlayChannelHeader extends React.Component{	
	render(){		
		return(
				<div className="music-listing__header">
					{this.props.playlistLength < 1 
						?
							<div>
								<p className="text-center">
									No Channel In Your QUEUE.								
								</p>
								<p className="text-center" style={{fontSize:'1.2em', color:'#EC5B3F'}}>
									<strong>Add From Your Dashboard</strong>
								</p>
							</div>
						:
							<div className="music-listing__actions-top">
			                  	<button ng-click="artist.addSongsAndPlay(generalPlaylist.audioPlaylist,mediaPlayer)" className="btn btn-primary"><i className="fa fa-headphones"></i>&nbsp;&nbsp;Listening</button>			                  	
			                </div>}	                
              	</div>
			)
	}
}

class PlayChannel extends React.Component{
	constructor(){
		super();

		this.state = {
			playlist: [],			
			loaded: false,
			channelId: '',
			_status: {displayStatus: 'paused'}
		}
		this._onChange = this._onChange.bind(this);
	}
	componentWillMount() {
		console.log("QUEUE mounted and change occured");

		AppStore.addChangeListener(this._onChange);		
		var _channeList = AppStore.GetChannelPlayList(true);
		if(_channeList != undefined && 
				_channeList.length != this.state.playlist.length){					
					this.setState({
					playlist: _channeList
			})
		}
	}
	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange);
	}
	_onChange(){		
		//GET CURRENT PLAYLIST
		var _channeList = AppStore.GetChannelPlayList(true);
		if(_channeList != undefined && 
				_channeList.length != this.state.playlist.length){					
					this.setState({
					playlist: _channeList
			})
		}



		//GET STREAMING STATUS
		var _streamStatus = AppStore.GetChannelStatus('')
		if(_streamStatus != undefined){
			this.setState(AppStore.GetChannelStatus(''));
		}
	}
	render(){		
		return(			
				<div className="page page-artist">
				    <div className="row">
				      	<div className={`${this.state.playlist.length > 0 ? "col-md-8" : "col-md-12"}`}>
					        <div className="panel panel-default">
					          	<div className="panel-body">

						            <div className="music-listing">
						            	<PlayChannelHeader playlistLength={this.state.playlist.length}/>

						            	<div className="music-listing__songs albumlist" data-ng-show="artist.AlbumList">
							            	{this.state.playlist.map((obj, index) => {
							            		return <ChannelWrapper key={obj.channelId} data={obj} 
							            			streamObj={{loaded: this.state.loaded}}
							            			status={this.state._status}/>
							            	})}
						            	</div>						            	
									</div>									
								</div>
							</div>
						</div>		
						{this.state.playlist.length > 0
							?
								<ChannelActivity />
							:
								null}						
					</div>
				</div>

			)
	}
}


export default PlayChannel;