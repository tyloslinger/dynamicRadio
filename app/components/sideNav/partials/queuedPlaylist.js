import React from 'react';


class PlaylistQueue extends React.Component{

	render(){
		return(
				<div className={`music-listing__songs ${this.props.hide}`}>
			        <div className="empty-listing">

			          <div className="empty-listing-icon">
			            <i className="musicicon-dj4">

			            </i>
			          </div>
			          <div className="empty-listing-message">
			            You dont have any item in the playlist
			          </div>

			          <div className="empty-listing-message">
			            <a ng-href="#/artist-list" className="btn btn-primary btn-block btn-sm" href="#/artist-list">Search</a>
			          </div>
			        </div>
			    </div>
			)
	}
}

export default PlaylistQueue;