import React from 'react';
import AllChannelItem from './allChannelItem';


class AllChannelItemList extends React.Component{
	constructor(){
		super();

		this.state = {
			repeater: [1,2,3,4]
		}
	}
	render(){
		return(
				<section>
			        <section className="panel panel-default panel-default-clean">
				          	<div className="panel-body panel-body--dashboard">
				          		<div className="ui-tab">
					          		<ul className="nav nav-tabs" >
							            <li heading="New Artists" className="ng-isolate-scope active">
											  	<a href="" ng-click="select()" tab-heading-transclude="" >Local Channels</a>
											</li>

											<li heading="New albums" >
											  	<a href="" ng-click="select()" tab-heading-transclude="" >Foreign Channels</a>
											</li>

											<li heading="Genres">
											  	<a href="" ng-click="select()" tab-heading-transclude="" >Artists Channels</a>
										</li>
							        </ul>
					          		<div className="tab-content">
	              						<div className="tab-pane active" >
							          		<div className="divider"></div>
							          		<div className="row music-covers-listing minified">
								          		{this.state.repeater.map(function(channel, index) {
													return <AllChannelItem key={index}/>
												})}
											</div>
										</div>
										
									</div>
								</div>

								
				          	</div>
			        </section>
			    </section>
			)
	}
}


export default AllChannelItemList;
