import React from 'react';
import ChannelList from './partials/channelList';

class ChannelDashboard extends React.Component{

	render(){
		return(
				<section data-ng-view="" id="content" className="animate-fade-up">
					<div className="page page-list">
						<div className="row">
							<div className="page-actions">
						      <div className="buttons-left">
						        <button className="btn btn-primary"><i className="fa fa-headphones"></i>&nbsp;&nbsp;Play all</button>
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
									<ChannelList />
								</div>
							</div>
							
						</div>
					</div>
				</section>
			)
	}
}

export default ChannelDashboard;