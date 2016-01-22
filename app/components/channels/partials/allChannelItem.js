import React from 'react';
import Actions from '../../../actions/appActions';


class AllChannelItem extends React.Component{

	render(){
		return(
				<div className="col-md-3">

		            <div  className="list-item__wrap">
                        <p></p>
                        <div className="list-item__image">
                          <img src={this.props.data.channelImg}/>
                          <div className="list-item__play">
                            <a>
                              <i style={{color:"#ffffff"}} 
                                className="fa fa-3x fa-headphones"
                                onClick={Actions.STREAM_CHANNEL.bind(null, {channelId: this.props.data.channelId})}></i>
                              <i style={{color:"#ffffff", paddingLeft:'10px'}} 
                                className="fa fa-3x fa-plus"
                                onClick={Actions.ADD_CHANNEL_TO_PLAYLIST.bind(null, this.props.data)}></i>
                            </a>
                          </div>
                        </div>

                        <div className="list-item__name">
                          <h6>
                            {this.props.data.channelName}
                          </h6>
                        </div>

                        <div className="list-item__style">
                          	<div className="artist-genre" ng-repeat="genre in artistItem.genre">
                            	<span>{this.props.data.category}</span>
                          	</div>
                        </div>
                    </div>         

		        </div>
			)
	}
}


export default AllChannelItem;