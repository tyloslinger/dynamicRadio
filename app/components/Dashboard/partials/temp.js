//channel item
import React from 'react';

class ListItemImage extends React.Component{

	render(){
		return(
				<div className="list-item__image">
	                <img src={this.props.imgSrc} />
	                <div className="list-item__play">
	                  <a className="list-item__play-button" ng-href="#/artist/thelunatics" href="#/artist/thelunatics">
	                    <i className="fa fa-2x fa-stumbleupon">

	                    </i>
	                  </a>
	                </div>
              	</div>
			)
	}	
}


class ListItemName extends React.Component{
	render(){
		return (
				<div className="list-item__name">
	                <h5 className="ng-binding">
	                  {this.props.name}
	                </h5>
	            </div>
			)
	}
}

class ListItemStyle extends React.Component{	
	render(){	
		return(
				<div className="list-item__style">
					{this.props.genre.map(function(genreItem, index) {
						return 	<div key={index} className="artist-genre ng-scope" ng-repeat="genre in artistItem.genre">
				                 	<span className="btn-tag ng-binding">{genreItem}</span>
				               	</div>
					})}
	                               
              	</div>
			)
	}
}


class ChannelItem extends React.Component{	
	render(){
		return(
				<div className="col-md-3">				
					<div className="list-item__wrap">
						<ListItemImage imgSrc={this.props.channelDataItem.image}/>
						<ListItemName name={this.props.channelDataItem.name}/>
						<ListItemStyle genre={this.props.channelDataItem.genre}/>
					</div>
				</div>
			)
	}
}

export default ChannelItem;



//channel list

import React from 'react';
import ChannelItem from './channelItem';

class ChannelList extends React.Component{
	render(){
		return(				
				<div className="row music-covers-listing">
					<div className="panel-body">
						{this.props.channelData.map(function(channelObj, index) {
							return <ChannelItem key={index} channelDataItem={channelObj} />;
						})}
					</div>				
				</div>
			)
	}
}

export default ChannelList;



//channel dashboard


import React from 'react';
import ChannelList from './partials/channelList'
import Header from '../header/header';

var channelData = [
  {
    "url_name": "thelunatics",
    "name": "BBC - Radio 1",
    "image": "../assets/images/artists/artist1.jpg",
    "genre": ["World News","Local News"],
    "about": "Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding"
  },
  {
    "url_name": "lafiestanegra",
    "name": "BBC - Radio 2",
    "image": "../assets/images/artists/artist2.jpg",
    "genre": ["World News","Local News"],
    "about": "Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding"
  },
  {
    "url_name": "kingofthemood",
    "name": "BBC - Radio 3",
    "image": "../assets/images/artists/artist3.jpg",
    "genre": ["World News","Local News"],
    "about": "Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding"
  },
  {
    "url_name": "thelunatics",
    "name": "BBC - Radio 4",
    "image": "../assets/images/artists/artist4.jpg",
    "genre": ["World News","Local News"],
    "about": "Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding"
  },
  {
    "url_name": "lafiestanegra",
    "name": "BBC - Radio 5 Live",
    "image": "../assets/images/artists/artist5.jpg",
    "genre": ["World News","Local News"],
    "about": "Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding"
  },
  {
    "url_name": "kingofthemood",
    "name": "BBC - Radio 1 Extra",
    "image": "../assets/images/artists/artist6.jpg",
    "genre": ["World News","Local News"],
    "about": "Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding"
  },
  {
    "url_name": "thelunatics",
    "name": "BBC - Radio 4 Extra",
    "image": "../assets/images/artists/artist7.jpg",
    "genre": ["World News","Local News"],
    "about": "Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding"
  },
  {
    "url_name": "lafiestanegra",
    "name": "BBC - Radio 5 Live sports extra",
    "image": "../assets/images/artists/artist8.jpg",
    "genre": ["World News","Local News"],
    "about": "Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding"
  },
  {
    "url_name": "kingofthemood",
    "name": "BBC - Radio Asian Network",
    "image": "../assets/images/artists/artist9.jpg",
    "genre": ["World News","Local News"],
    "about": "Great music inspired by early electronic sounds, combining the symphony of classical instruments and complete surrounding"
  }
]

class ChannelDashBoard extends React.Component{
	constructor(){
		super();
	}

	componentDidMount() {
		console.log(channelData);
	}

	render(){
		return(	
				<div className="view-container">
					<Header />				
					<section id="content" className="animate-fade-up">
						<div className="page page-list" >
							<div className="row">
								<div className="page-actions">
							      <div className="buttons-left">
							        <button className="btn btn-primary"><i className="fa fa-headphones"></i> Listen to all</button>
							      </div>

							      <div className="buttons-right">
							        <i className="fa fa-retweet"></i>
							        <i className="fa fa-inbox"></i>
							        <i className="fa fa-share-alt"></i>
							      </div>
							    </div>
								<div className="divider-md"></div>
								<div className="panel panel-default">
									<div className="panel-body">
										<div className="row music-covers-listing">							
											<ChannelList channelData={channelData}/>
										</div>				
									</div>
								</div>
							</div>						
						</div>
					</section>
				</div>
			)
	}
}


export default ChannelDashBoard;