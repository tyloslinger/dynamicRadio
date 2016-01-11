import React from 'react';


class AllChannelItem extends React.Component{

	render(){
		return(
				<div className="col-md-3">

		            <div className="list-item__wrap">

                        <div className="list-item__image">
                          <img src="../assets/images/albums/album2.jpg"/>
                          <div className="list-item__play">
                            <a href="#">
                              <i style={{color:"#EC5B3F"}} className="fa fa-3x fa-headphones">
                              </i>
                            </a>
                          </div>
                        </div>

                        <div className="list-item__name">
                          <h6>
                            channel name
                          </h6>
                        </div>

                        <div className="list-item__style">
                          	<div className="artist-genre" ng-repeat="genre in artistItem.genre">
                            	<span>genre</span>
                          	</div>
                        </div>
                    </div>         

		        </div>
			)
	}
}


export default AllChannelItem;