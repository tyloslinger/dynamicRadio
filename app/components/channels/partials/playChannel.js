import React from 'react';
import AppStore from '../../../stores/appStore';
import Action from '../../../actions/appActions';
import ChannelActivity from './channelActivity';



class ChannelRow extends React.Component{

	render(){
		return(
				<div className="music-listing__row ng-scope" ng-repeat="song in album.songs | filter:searchText">

	                <div className="music-listing__number ng-binding">
	                  1
	                  <div className="play-button">
	                    <button ng-click="generalPlaylist.addSong(song)" className="btn btn-primary"><i className="fa fa-play-circle"></i></button>
	                  </div>
	                </div>

	                <div className="music-listing__row-actions">
	                  <i className="fa fa-heart action" title="Add to Favorites"></i>
	                  <div className="btn-group">
	                    <a type="button" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
	                      <i className="fa fa-book action"></i>
	                    </a>

	                    <ul className="dropdown-menu" role="menu">
	                      <li><a href="javascript:;" data-ng-click="generalPlaylist.createNewPlaylist(song)">New Playlist</a></li>
	                      <li className="divider"></li>

	                      <li id="user-menu" className="nav-item ng-scope" ng-repeat="playlist_list in generalPlaylist.userPlaylists track by $index">
	                        <a href="javascript:;" data-ng-click="artist.addSongToPlaylist(song,playlist_list.name)" className="ng-binding">
	                          Greatest hits
	                        </a>
	                      </li>
	                      <li id="user-menu" className="nav-item ng-scope" ng-repeat="playlist_list in generalPlaylist.userPlaylists track by $index">
	                        <a href="javascript:;" data-ng-click="artist.addSongToPlaylist(song,playlist_list.name)" className="ng-binding">
	                          Sons of Dream
	                        </a>
	                      </li>
	                    </ul>
	                  </div>
	                  <i className="fa fa-retweet action" title="Share to Feed"></i>
	                  <i className="fa fa-list action" title="More Options..."></i>
	                </div>

	                <div className="music-listing__name">

	                  <div className="music-listing__thumbnail">
	                    <img ng-src="dist/images/songs/song1.jpg" alt="song__image" src="dist/images/songs/song1.jpg"/>
	                  </div>

	                  <div className="music-listing__artist-name ng-binding">
	                    The lunatics
	                  </div>

	                  <div className="music-listing__song-name ng-binding">
	                    Come Together
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

                  <div className="album_image">
                    <img src={this.props.data.channelImg} alt="album image"/>
                  </div>

                  <div className="album_name">
                    <p className="text-muted ng-binding">
                      {this.props.channelName}
                    </p>
                    <h4 className="ng-binding">
                      {this.props.category}
                    </h4>                    
                  </div>                  


                  <ChannelRow />
                </div>
			)
	}
}



class PlayChannelHeader extends React.Component{

	render(){
		return(
				<div className="music-listing__header">

	                <div className="music-listing__actions-top">
	                  	<button ng-click="artist.addSongsAndPlay(generalPlaylist.audioPlaylist,mediaPlayer)" className="btn btn-primary"><i className="fa fa-headphones"></i>&nbsp;&nbsp;Listening</button>	                  

	                  	<div className="btn-group">
		                    <button type="button" className="btn btn-bordered btn-bordered-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
		                      <i className="fa fa-plus"></i>&nbsp;&nbsp; <span className="caret"></span>
		                    </button>

		                    <ul className="dropdown-menu" role="menu">		                      
		                      <li><a href="#">Another action</a></li>
		                      <li><a href="#">Something else here</a></li>		                      
		                    </ul>
	                  	</div>

	                </div>

	                <div className="music-listing__filter">
	                  	<input type="text" className="form-control ng-pristine ng-untouched ng-valid" ng-model="searchText" placeholder="Filter" />
	                </div>

	                <div className="music-listing__switch">
		                <a className="btn btn-switch" href="javascript:;" data-ng-click="artist.toggleAlbumsList();" tooltip-placement="bottom" tooltip="View Albums" tooltip-append-to-body="true">
		                    <i className="fa fa-list">

		                    </i>
		                </a>
		                <a className="btn btn-switch" href="javascript:;" data-ng-click="artist.toggleFullList();" tooltip-placement="bottom" tooltip="View all songs" tooltip-append-to-body="true">
		                    <i className="fa fa-sliders">

		                    </i>
		                </a>
	                </div>

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
		//AppStore.addChangeListener(this._onChange);
		console.log("mounted")
		var _channeList = AppStore.GetChannelPlayList(true);
		if(_channeList != undefined){
			this.setState({
				playlist: _channeList
			})
		}
	}
	componentWillUnmount() {
		//AppStore.removeChangeListener(this._onChange);
	}
	_onChange(){
		// var _channeList = AppStore.GetChannelPlayList(true);
		// if(_channeList != undefined){
		// 	this.setState({
		// 		playlist: _channeList
		// 	})
		// }
	}
	render(){		
		return(			
				<div className="page page-artist">
				    <div className="row">
				      	<div className="col-md-8">
					        <div className="panel panel-default">
					          	<div className="panel-body">

						            <div className="music-listing">
						            	<PlayChannelHeader />

						            	<div className="music-listing__songs albumlist" data-ng-show="artist.AlbumList">
							            	{this.state.playlist.map((obj, index) => {
							            		return <ChannelWrapper key={obj.channelId} data={obj}/>
							            	})}
						            	</div>						            	
									</div>									
								</div>
							</div>
						</div>						
						<ChannelActivity />
					</div>
				</div>

			)
	}
}


export default PlayChannel;