import React from 'react';

class CategoryPage extends React.Component{

	render(){
		return(				
				<div className="row">					            	
	            	<div className="col-xs-8 col-md-8">
	            		<fieldset>					
							<div className="form-group">
								<div className="input-group">
									<span className="input-group-addon">
		                                <span className="fa fa-pencil"></span>
		                            </span>
									<input type='text' placeholder='Category Group Name' className="form-control"/>
								</div>
							</div>

							<div className="form-group">
								<div className="input-group">
									<span className="input-group-addon">
		                                <span className="fa fa-pencil"></span>
		                            </span>
									<input type='text' placeholder='Category Display Name' className="form-control"/>
								</div>
							</div>
							
							<div className="form-group pull-right">
								<button className="btn btn-default">Save</button>
							</div>
						</fieldset>
	            	</div>
	            	<div className="col-xs-4 col-md-4" style={{paddingTop:'0px', marginTop:'0px'}}>
	            		<div className="row">
	            			<div className="callout-elem callout-elem-success">
		            			<h4 className="text-center">Categories</h4>
				                <p className="ng-binding">The selected page no: 4</p>								                
			            	</div>
	            		</div>					            		
	            	</div>
	            </div>
			)
	}
}


export default CategoryPage;