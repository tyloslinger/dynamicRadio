import React from 'react';
import AppStore from '../../../stores/appStore';
import Action from '../../../actions/appActions';
import ChannelActivity from './channelActivity';


class PlayChannelItem extends React.Component{

	render(){
		return(
				<div className="music-listing__name">

                    <div className="music-listing__thumbnail">
                      <img src="../assets/images/songs/song1.jpg" alt="song__image" width='100px' height='100px'/>
                      <img src={this.props.data.channelImg} alt="song__image" width='100px' height='100px'/>
                    </div>

                    <div className="music-listing__artist-name ng-binding">
                      {this.props.data.channelName}
                    </div>
                    <div className="music-listing__song-name ng-binding">
                      {this.props.data.category}
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
	render(){
		return(
				<div className="page page-artist">
				    <div className="row">
				      	<div className="col-md-8">
					        <div className="panel panel-default">
					          	<div className="panel-body">

						            <div className="music-listing">
						            	<PlayChannelHeader />

						            	{this.state.playlist.map((obj, index) => {
						            		return <PlayChannelItem key={obj.channelId} data={obj}/>
						            	})}						            	
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