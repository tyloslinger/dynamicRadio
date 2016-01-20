import React from 'react';
import AppStore from '../../../stores/appStore';
import Action from '../../../actions/appActions';

class CategoryPage extends React.Component{
	constructor(){
		super();
		this.state = {
			catName:'',
			catDispName: '',
			categories:[]
		}

		this._onChange = this._onChange.bind(this);
	}
	//
	handleTextChange(e, label){		
		switch(e){
			case 'catName':
				this.setState({catName: label.target.value});
			break;
			case 'catDispName':
				this.setState({catDispName: label.target.value});				
			break;
		}		
	}	
	componentWillMount(){
		AppStore.addChangeListener( this._onChange );
	}	
	componentWillUnmount(){
		AppStore.removeChangeListener( this._onChange );
	}
	_onChange(){
		this.setState({categories: AppStore.GetCategories()});
	}	
	render(){
		return(				
				<div className="row">					            	
	            	<div className="col-xs-8 col-md-8">
	            		<div className="callout-elem callout-elem-warning text-center">
			                <h4>blah blah blah</h4>
			                <p>Lorem ipsum dolor sit amet, Lorem Ipsum is simply dummy text. Assumenda, alias, in accusantium totam adipisci vel et suscipit quidem libero pariatur minus ratione quo doloremque error at nemo incidunt dicta quia?</p>
			            </div>

	            		<fieldset>
							<div className="form-group">
								<div className="input-group">
									<span className="input-group-addon">
		                                <span className="fa fa-pencil"></span>
		                            </span>
									<input type='text' placeholder='Category Group Name' className="form-control" 
										value={this.state.catName} onChange={this.handleTextChange.bind(this, 'catName')}/>									
								</div>
							</div>

							<div className="form-group">
								<div className="input-group">
									<span className="input-group-addon">
		                                <span className="fa fa-pencil"></span>
		                            </span>
									<input type='text' placeholder='Category Display Name' className="form-control"
										value={this.state.catDisplayname} onChange={this.handleTextChange.bind(this, 'catDispName')}/>
								</div>
							</div>
							
							<div className="form-group pull-right">
								<button className="btn btn-default"
									onClick={Action.ADD_NEW_CATEGORY.bind(null, {
										catName: this.state.catName,
										catDispName: this.state.catDispName
									})}>Save</button>
							</div>
						</fieldset>
	            	</div>
	            	<div className="col-xs-4 col-md-4">
	            		<div className="row">
	            			<div className="callout-elem callout-elem-warning text-center">
				                <h4>blah blah blah</h4>
				                <p>Lorem ipsum dolor sit amet, Lorem Ipsum is simply dummy text. Assumenda, alias, in accusantium  </p>
				            </div>
	            			<div className="callout-elem callout-elem-success" style={{paddingTop:'0px', marginTop:'0px'}}>
		            			<h4 className="text-center">Categories</h4>
				                {this.state.categories.map((obj, index) => {
				                	return <p key={obj.catName}>
						                		{obj.catDispName}
						                		<i key={obj.catName && `(_i)`} className="fa fa-times pull-right" style={{color:"red", fontSize:'0.8em'}}
						                					onClick={Action.REMOVE_CATEGORY.bind(null, obj)}></i>
						                	</p>		
				                })}
			            	</div>
	            		</div>					            		
	            	</div>
	            </div>
			)
	}
}


export default CategoryPage;