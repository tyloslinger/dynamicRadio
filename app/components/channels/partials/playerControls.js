import React from 'react';
import Actions from '../../../actions/appActions';
import AppStore from '../../../stores/appStore';

class PlayControls extends React.Component{

	render(){
		return(
				<div className="controlling-options">
		            <div className="btn" ng-click="mediaPlayer.prev()">
		              	<i className="fa fa-step-backward"></i>
		            </div>
		            <div className="btn" ng-click="mediaPlayer.playPause()">
		              	<i className="fa fa-play" ng-className="{ 'fa-pause': mediaPlayer.playing, 'fa-play': !mediaPlayer.playing }"></i>
		            </div>
		            <div className="btn" ng-click="mediaPlayer.next()">
		              	<i className="fa fa-step-forward"></i>
		            </div>		        
		            <div className="btn btn-noclick">
		              	<span><span className="badge ng-binding">100%</span></span>
		            </div>
		            <div className="btn" ng-click="mediaPlayer.setVolume(mediaPlayer.volume - 0.1)">
		              	<span><i className="fa fa-volume-down"></i></span>
		            </div>
		            <div className="btn" ng-click="mediaPlayer.setVolume(mediaPlayer.volume + 0.1)">
		              	<span><i className="fa fa-volume-up"></i></span>
		            </div>
		        </div>
			)
	}
}


class PlayDuration extends React.Component{

	render(){
		return(
				<div className="song-duration">
		            <span className="song-duration-beg ng-binding">00:00</span>
			            <div className="progress" ng-click="mediaPlayer.seek(mediaPlayer.duration * generalPlaylist.seekPercentage($event))">
			              <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" ng-style="{ width: mediaPlayer.currentTime*100/mediaPlayer.duration + '%' }"></div>
			            </div>
		            <span className="song-duration-end ng-binding">03:28</span>
		        </div>
			)
	}
}


class PlayerControls extends React.Component{

	render(){
		return(
				<div className="player-control">
        			<div className="player-control-bottom">
        				<PlayControls />
        				<PlayDuration />
        			</div>
        		</div>
			)
	}
}



export default PlayerControls;