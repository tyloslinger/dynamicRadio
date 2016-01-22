import React from 'react';
import AppStore from '../../../stores/appStore';
import Action from '../../../actions/appActions';


class PlayChannelItem extends React.Component{

	render(){
		return(
				<div className="music-listing__name">

                    <div className="music-listing__thumbnail">
                      <img src="../assets/images/songs/song1.jpg" alt="song__image"/>
                    </div>

                    <div className="music-listing__artist-name ng-binding">
                      The lunatics
                    </div>
                    <div className="music-listing__song-name ng-binding">
                      Come Together
                    </div>

                </div>
			)
	}
}

class PlayChannelHeader extends React.Component{

	render(){
		return(
				<div className="music-listing__header">

	                <div className="music-listing__actions-top">
	                  	<button ng-click="artist.addSongsAndPlay(generalPlaylist.audioPlaylist,mediaPlayer)" className="btn btn-primary"><i className="fa fa-headphones"></i>&nbsp;&nbsp;Play all</button>	                  

	                  	<div className="btn-group">
		                    <button type="button" className="btn btn-bordered btn-bordered-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
		                      <i className="fa fa-plus"></i>&nbsp;&nbsp; <span className="caret"></span>
		                    </button>

		                    <ul className="dropdown-menu" role="menu">
		                      <li><a ng-click="artist.addSongs(generalPlaylist.audioPlaylist)" href="javascript:;">Add to Queue</a></li>
		                      <li><a href="#">Another action</a></li>
		                      <li><a href="#">Something else here</a></li>
		                      <li className="divider"></li>
		                      <li><a href="#">Separated link</a></li>
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

	render(){
		return(
				<div className="page page-artist">

				    <div className="row">

				      	<div className="col-md-8">

					        <div className="panel panel-default">
					          	<div className="panel-body">

						            <div className="music-listing">
						            	<PlayChannelHeader />

						            	<PlayChannelItem />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			)
	}
}


export default PlayChannel;