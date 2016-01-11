import React from 'react';

class AddChannelControls extends React.Component{

	render(){
		return(
				<div className="main-body">
			        <div className="container">
			            <div className="form-container">
							<section>
								<div className="row">
									<div className="col-sm-3">
										<div className="btn-group-vertical">
				                            <button type="button" className="btn btn-default">Top</button>
				                            <button type="button" className="btn btn-default">Middle</button>
				                            <button type="button" className="btn btn-default">Bottom</button>
				                        </div>
									</div>
										<div className="col-sm-6">
											<form className="form-horizontal">
							                    <div className="form-group">
							                        <div className="input-group">
							                            <span className="input-group-addon">
							                                <span className="glyphicon glyphicon-user"></span>
							                            </span>
							                            <input  type="text"
							                                    className="form-control"
							                                    placeholder="User name"
							                                    />
							                        </div>
							                    </div>
							                    <div className="form-group">
							                        <div className="input-group">
							                            <span className="input-group-addon">
							                                <span className="glyphicon glyphicon-envelope"></span>
							                            </span>
							                            <input type="email"
							                                   className="form-control"
							                                   placeholder="Email"
							                                   />
							                        </div>
							                    </div>
							                    <div className="form-group">
							                        <div className="input-group">
							                            <span className="input-group-addon">
							                                <span className="glyphicon glyphicon-lock"></span>
							                            </span>
							                            <input type="password"
							                                   className="form-control"
							                                   placeholder="Password"
							                                   />
							                        </div>
							                    </div>	                  
							                </form>
						                </div>
					                <div className="col-sm-3"></div>
				                </div>
			                </section>
                		</div>
            		</div>
        		</div>
			)
	}
}

class AddChannelUniPage extends React.Component{

	render(){
		return(
				<div className="col-sm-12">
					<section className="panel panel-default">
				        <div className="panel-heading">Justified Tabs</div>
				        <div className="panel-body">

						          <div justified="true" className="ui-tab ng-isolate-scope">
								  <ul className="nav nav-tabs nav-justified" ng-className="{'nav-stacked': vertical, 'nav-justified': justified}" ng-transclude="">
								            <li ng-className="{active: active, disabled: disabled}" heading="Tab one" className="ng-isolate-scope active">
								  	<a href="" ng-click="select()" tab-heading-transclude="" className="ng-binding">Tab one</a>
									</li>
									            <li ng-className="{active: active, disabled: disabled}" heading="Tab second" className="ng-isolate-scope">
									  <a href="" ng-click="select()" tab-heading-transclude="" className="ng-binding">Tab second</a>
									</li>
									            <li ng-className="{active: active, disabled: disabled}" heading="Tab third" className="ng-isolate-scope">
									  <a href="" ng-click="select()" tab-heading-transclude="" className="ng-binding">Tab third</a>
									</li>

						          </ul>
						  <div className="tab-content">
						    <div className="tab-pane ng-scope active" ng-repeat="tab in tabs" ng-className="{active: tab.active}" tab-content-transclude="tab">
						    <span className="ng-scope">Lorem Ipsum is simply dummy textindustry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s </span></div>
						    <div className="tab-pane ng-scope" ng-repeat="tab in tabs" ng-className="{active: tab.active}" tab-content-transclude="tab">
						    <span className="ng-scope">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</span></div>
						    <div className="tab-pane ng-scope" ng-repeat="tab in tabs" ng-className="{active: tab.active}" tab-content-transclude="tab">
						    <span className="ng-scope">Lorem Ipsum is simply dummy textindustry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s </span></div>		    
						  </div>
						</div>
				        </div>	
			      	</section>
		      	</div>
			)
	}
}

class AddChannelPage extends React.Component{

	render(){
		return(				
            	<AddChannelUniPage />			    
			)
	}
}


export default AddChannelPage;