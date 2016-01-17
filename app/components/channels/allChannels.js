import React from 'react';
import AllChannelsList from './partials/allChannelList';
import Actions from '../../actions/appActions';

class AllChannels extends React.Component{
	componentWillMount(){
		Actions.SHOW_TOPMENU();
	}	
	render(){
		return(
				<section id="content" className="animate-fade-up fixed">
					<div className="page page-full page-dashboard two-column">
						<section className="inner-wrapper scrollable">
			    			<div className="inner-page">
								<section className="dashboard-banner">

							        <div className="dashboard-banner__content">
							           <h2>
							            {"It's"} all HERE, Find the Best Channels
							          </h2>

							          <h5>
							            DYDIO gives you access to the best channels anywhere.
								        Search {"for"} Local or Foreign channels as well as Artist channels.							            
							            Create your own playlist, schedule your playlist and share {"with"} your friends.
							          </h5>


							          <a className="btn btn-primary" href="#/artist-list">
							            Start searching
							          </a>

							        </div>
							    </section>

							    <AllChannelsList />
						    </div>
					    </section>
				    </div>
			    </section>
			)
	}
}


export default AllChannels;