import React from 'react';


class AllChannelItem extends React.Component{

	render(){
		return(
				<div className="col-md-3">

		            <div  className="list-item__wrap">

                        <div className="list-item__image">
                          <img src={this.props.data.channelImg}/>
                          <div className="list-item__play">
                            <a href="#">
                              <i style={{color:"#ffffff"}} 
                                className="fa fa-3x fa-headphones"></i>
                              <i style={{color:"#ffffff", paddingLeft:'10px'}} 
                                className="fa fa-3x fa-plus"></i>
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