import React from 'react';
import guid from 'uuid';
import AppStore from '../../../stores/appStore';
import Action from '../../../actions/appActions';




class PlayListItem extends React.Component{

	render(){
		return(
				<div className="music-listing__row" ui-draggable="true" drag="song" on-drop-success="generalPlaylist.removeSong($index)" 
				ui-on-drop="generalPlaylist.dropSong($data, $index)" draggable="true">
			        <div className="music-listing__number ng-binding">
			        	4
			        </div>

		          	<div className="music-listing__row-actions">
			            <i className="fa fa-times action" title="Remove song"
			            	onClick={Action.REMOVE_CHANNEL(this.props.data.channelId)}></i>
			            <a href="#/playChannel">
			            	<i className="fa fa-list action" title="More Options..."></i>
			            </a>
		          	</div>

		          	<div className="music-listing__name">

			            <div className="music-listing__thumbnail">			              			              
			              <img src={this.props.data.channelImg} width='30px' height='30px'/>
			            </div>

			            <div className="music-listing__artist-name ng-binding">
			              {this.props.data.channelName}
			            </div>
			            <div className="music-listing__song-name ng-binding">
			              {this.props.data.category}
			            </div>

		          	</div>
		          	<p></p>
		        </div>
			)
	}
}

class PlaylistQueue extends React.Component{
	constructor(){
		super();
		this.state = {
			playlist: []
		}
		this._onChange = this._onChange.bind(this);
	}
	componentWillMount(){
		AppStore.addChangeListener( this._onChange );
	}
	componentWillUnmount(){
		AppStore.removeChangeListener( this._onChange );
	}
	_onChange(){	
		var _channelList = AppStore.GetChannelPlayList(true);
		if(_channelList != undefined){
			this.setState({
				playlist: AppStore.GetChannelPlayList(true)
			});
		}
	}
	testGUID(){
		
	}
	render(){
		return(
				<div className={`music-listing__songs ${this.props.hide}`}>
					<div className="playlist-item-list music-listing--queue" ng-show="navigation.navigationState.playlist">
						<div className="music-listing__songs">
							{this.state.playlist.length > 0 
								?
									this.state.playlist.map((obj, index) => {
										return <PlayListItem  key={obj.channelId} data={obj}/>	
									})
								:
									null
							}
						</div>

						<div className={`empty-listing ${this.state.playlist.length > 0 ? 'hide' : ''}`}>
				          	<div className="empty-listing-icon">
				            	<i className="musicicon-dj4">
				            	</i>
				          	</div>
				          	<div className="empty-listing-message">
				            	You dont have any item in the playlist
				          	</div>
				          	<div className="empty-listing-message">
				            	<a ng-href="#/artist-list" className="btn btn-primary btn-block btn-sm" href="#/artist-list"
				            		onClick={this.testGUID.bind(this)}>Add Channels From View</a>
				          	</div>				          	
				        </div>				      
					</div>			        
			    </div>
			)
	}
}

export default PlaylistQueue;