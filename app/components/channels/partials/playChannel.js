import React from 'react';
import AppStore from '../../../stores/appStore';
import Action from '../../../actions/appActions';
import ChannelActivity from './channelActivity';
import howl from 'howler';


class ChannelRow extends React.Component{	
	constructor(){
		super();		
		this.state = {
			_howl: null,			
			loaded: false,			
		}
		this._onChange = this._onChange.bind(this);
	}
	componentWillMount() {
		AppStore.addChangeListener( this._onChange );		
	}
	componentWillUnmount() {
		AppStore.removeChangeListener( this._onChange );
	}
	_onChange(){
		this.setState(
			AppStore.GetChannelStatus(this.props.channelId)
		)
		
		if(this.state.loaded && this.state._howl != undefined){			
			this.state._howl.play();
		}
	}
	_playPause(action, val){		
		switch(action){
			case "play":
				Action.STREAM_CHANNEL({channel: val, _howl: howl, init: true});					
			break;
			case "pause":
				if(this.state.loaded && this.state._howl != undefined){
					this.state._howl.pause();
				}					
			break;
		}			
	}
	render(){
		return(
				<div className="music-listing__row ng-scope">

	                <div className="play-button">
	                    <button className="btn btn-primary">
	                    	<i className="fa fa-play" onClick={this._playPause.bind(this, 'play', this.props.data)}></i>
	                    	&nbsp;&nbsp;&nbsp;&nbsp;
	                    	<i className="fa fa-pause" onClick={this._playPause.bind(this, 'pause', true)}></i>
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
                  	<ChannelRow data={this.props.data}/>
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
			playlist: []
		}
		this._onChange = this._onChange.bind(this);
	}
	componentWillMount() {
		AppStore.addChangeListener(this._onChange);
		var _channeList = AppStore.GetChannelPlayList(true);
		if(_channeList != undefined){
			this.setState({
				playlist: _channeList
			})
		}
	}
	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange);
	}
	_onChange(){		
		var _channeList = AppStore.GetChannelPlayList(true);
		if(_channeList != undefined){
			this.setState({
				playlist: _channeList
			})
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
							            		return <ChannelWrapper key={obj.channelId} data={obj}/>
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