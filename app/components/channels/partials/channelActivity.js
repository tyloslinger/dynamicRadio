import React from 'react';
import Actions from '../../../actions/appActions';
import AppStore from '../../../stores/appStore';


class CurrentlyListening extends React.Component{

	render(){
		return(
				<div className="panel panel-default">
		          <div className="panel-body">
		            <h4>
		              <i className="fa fa-history color-primary"></i>&nbsp;&nbsp; Listening to current Channel
		            </h4>
		            <div>

		              	<ul className="list-inline">
		              		<li>
		              			<i className="fa fa-people"></i>
		              		</li>
			                <li>
			                  <img src="../assets/images/user.png" alt="" className="img30_30 img-circle" tooltip-placement="bottom" tooltip="John Doeser" tooltip-append-to-body="true"/>
			                </li>
			                <li>
			                  <img src="../assets/images/team1.jpg" alt="" className="img30_30 img-circle" tooltip-placement="bottom" tooltip="John Doeser" tooltip-append-to-body="true"/>
			                </li>
			                <li>
			                  <img src="../assets/images/team2.jpg" alt="" className="img30_30 img-circle" tooltip-placement="bottom" tooltip="John Doeser" tooltip-append-to-body="true"/>
			                </li>
			                <li>
			                  <img src="../assets/images/team3.jpg" alt="" className="img30_30 img-circle" tooltip-placement="bottom" tooltip="John Doeser" tooltip-append-to-body="true"/>
			                </li>
			                <li>
			                  <img src="../assets/images/team4.jpg" alt="" className="img30_30 img-circle" tooltip-placement="bottom" tooltip="John Doeser" tooltip-append-to-body="true"/>
			                </li>			                
		              	</ul>

		            	</div>
		          	</div>
		        </div>
			)
	}
}


class RelatedChannels extends React.Component{

	render(){
		return(
				<div className="panel panel-default">
		          	<div className="panel-body">
		            <h4>
		              <i className="fa fa-headphones color-primary"></i>&nbsp;&nbsp; Related channels
		            </h4>
			            <div className="related-items">

			              <div className="related-item">
			                <div className="item-image">
			                  <img src="../assets/images/artists/artist1.jpg" className="img40_40"/>
			                </div>
			                <div className="item-name">
			                  <h5>
			                    The Beatles
			                  </h5>
			                </div>
			              </div>
			              <div className="related-item">
			                <div className="item-image">
			                  <img src="../assets/images/artists/artist2.jpg" className="img40_40"/>
			                </div>
			                <div className="item-name">
			                  <h5>
			                    Jason Derulo
			                  </h5>
			                </div>
			              </div>
			              <div className="related-item">
			                <div className="item-image">
			                  <img src="../assets/images/artists/artist3.jpg" className="img40_40"/>
			                </div>
			                <div className="item-name">
			                  <h5>
			                    Aloe Black
			                  </h5>
			                </div>
			              </div>
			              <div className="related-item">
			                <div className="item-image">
			                  <img src="../assets/images/artists/artist4.jpg" className="img40_40"/>
			                </div>
			                <div className="item-name">
			                  <h5>
			                    Pharel Williams
			                  </h5>
			                </div>
			              </div>
			            </div>
		          	</div>
		        </div>
			)
	}
}



class ChannelActivity extends React.Component{

	render(){
		return(
				<div className="col-md-4">
					<CurrentlyListening />

					<RelatedChannels />
				</div>
			)
	}
}


export default ChannelActivity;