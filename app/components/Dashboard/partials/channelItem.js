import React from 'react';

class ChannelItemInfo extends React.Component{

	render(){
		return(
				<div>
				{this.props.data.map(function(dataObj, index) {
					return 	<li key={index} classNameName="list-group-item">
		                        <span classNameName={dataObj.badge}>{dataObj.volume}</span>
		                        <i classNameName="fa fa-envelope-o"></i>
		                        {" "}{dataObj.channelName}
		                    </li> 
				})}	
				</div>			
			)
	}
}


class ChannelItem extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			channelData: {
				name: "BBC Live",
				info: "World News"
			},
			itemInfo: [{
				channelName: "Listening Now",
				volume: 14,
				badge: "badge badge-info"
			},
			{
				channelName: "One Ups",
				volume: 3,
				badge: "badge badge-warning"
			}
			]
		}
	}
	render(){
		return(
				<div className="list-item__wrap">

	              <div className="list-item__image">
	                <img src="../assets/images/albums/album1.jpg" />
	                <div className="list-item__play">
	                  <a href="#/artist/thelunatics">
	                  	<span className="fa-2x" style={{color: "white"}}>Listen</span> {"  "}
	                    <i className="fa fa-2x fa-play" style={{color: "white"}}>          
	                    </i>
	                  </a>
	                  <div></div>
	                  <a href="#/artist/thelunatics">
	                  	<span className="fa-2x" style={{color: "white"}}>Schedule</span> {"  "}
	                    <i className="fa fa-2x fa-clock-o" style={{color: "white"}}>          
	                    </i>
	                  </a>
	                </div>	                
	              </div>

	              <div className="list-item__name">
	                <h5 className="color-primary text-center">
	                  BBC Live
	                </h5>
	                <h6 className="text-center">
	                  World News
	                </h6>
	              </div>

	              <div className="list-item__style text-center">
	                <div className="artist-genre ng-scope" ng-repeat="genre in album.genre">
	                  <span className="btn-tag ng-binding">#one</span>
	                </div>
	                <div className="artist-genre ng-scope" ng-repeat="genre in album.genre">
	                  <span className="btn-tag ng-binding">#two</span>
	                </div>	                
	              </div>
              </div>				
			)
	}
}


export default ChannelItem;


