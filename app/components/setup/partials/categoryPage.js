import React from 'react';
import AppStore from '../../../stores/appStore';
import Action from '../../../actions/appActions';

class CategoryPage extends React.Component{
	constructor(){
		super();
		this.state = {
			catName:'',
			catDispName: '',
			catGroup: '',
			categories:[],
			catGroups: [],
			selectedGroup: ''
		}

		this._onChange = this._onChange.bind(this);
	}
	//
	handleTextChange(e, label){		
		switch(e){
			case 'catGroup':
				this.setState({catGroup: label.target.value});
			break;
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
		this.setState({
			categories: AppStore.GetCategories(undefined),
			catGroups: AppStore.GetCategoryGroup()
		});
	}	
	handleClear1(){
		this.setState({
			catName:'',
			catDispName: ''
		});
	}
	handleClear2(){
		this.setState({
			catGroup:''
		});
	}
	handleSelect(e){
		if(e.target.value != undefined){
			this.setState({
				selectedGroup: e.target.value
			})
		}
	}
	render(){		
		return(				
				<div className="row">					            	
	            	<div className="col-md-12">
	            		<div className="row">
		            		<div className="callout-elem callout-elem-warning text-center">
				                <h4>blah blah blah</h4>
				                <p>Lorem ipsum dolor sit amet, Lorem Ipsum is simply dummy text. Assumenda, alias, in accusantium totam adipisci vel et suscipit quidem libero pariatur minus ratione quo doloremque error at nemo incidunt dicta quia?</p>
				            </div>
			            </div>

	            		<div className="row">
	            			<div className='col-md-12'>
	            				<div className='col-md-7'>
	            					<div className="form-group">
										<div className="input-group">
											<span className="input-group-addon">
				                                <span className="fa fa-pencil"></span>
				                            </span>
											<input type='text' placeholder='--enter category group Name--' className="form-control" 
												value={this.state.catGroup} onChange={this.handleTextChange.bind(this, 'catGroup')}/>									
										</div>										
									</div>
									<div className='form-group pull-right'>
										<div>
											<button className='btn btn-default btn-width-xs'
												onClick={Action.ADD_NEW_CATEGORY_GROUP.bind(null, {
													groupName: this.state.catGroup
												})}>Save</button>
											<button className='btn btn-primary btn-width-xs'
												onClick={this.handleClear2.bind(this)}>Clear</button>
										</div>
									</div>
	            				</div>
	            				<div className='col-md-5'>
	            					<select className='form-control' onChange={this.handleSelect.bind(this)}>
	            						<option value=''>--select Group--</option>
	            						{this.state.catGroups.map((obj, index) => {
	            							return <option key={obj.groupName} value={obj.groupName}>{obj.groupName}</option>
	            						})}
	            					</select>
	            				</div>	            				
	            			</div>	            			
	            		</div>

	            		<div className='row'>
	            			<div className="form-group">
	            				{this.state.selectedGroup != ''
	            					?
	            						<h4>
			            					Selected Group: <strong className="alert-default">{this.state.selectedGroup}</strong>
			            				</h4>
	            					: 
	            						null}	            				
	            			</div>
	            		</div>

	            		<div className="row">
	            			<div className='col-md-7'>
								<div className="form-group">
									<div className="input-group">
										<span className="input-group-addon">
			                                <span className="fa fa-pencil"></span>
			                            </span>
										<input type='text' placeholder='--enter sub-category Name--' className='form-control' disabled={this.state.selectedGroup === ''}
											value={this.state.catName} onChange={this.handleTextChange.bind(this, 'catName')}/>																		
									</div>
								</div>

								<div className="form-group">
									<div className="input-group">
										<span className="input-group-addon">
			                                <span className="fa fa-pencil"></span>
			                            </span>
										<input type='text' placeholder='--enter display Name--' className="form-control" disabled={this.state.selectedGroup === ''}
											value={this.state.catDispName} onChange={this.handleTextChange.bind(this, 'catDispName')}/>
									</div>
								</div>
								
								<div className="form-group pull-right">
									<button className="btn btn-default btn-width-xs" disabled={this.state.selectedGroup === ''}
										onClick={Action.ADD_NEW_CATEGORY.bind(null, {
											catName: this.state.catName,
											catDispName: this.state.catDispName,
											groupName: this.state.selectedGroup
										})}>Save</button>
									<button className='btn btn-primary btn-width-xs'
										onClick={this.handleClear1.bind(this)} disabled={this.state.selectedGroup === ''}
										>Clear</button>
								</div>
							</div>

							<div className="col-md-5">
			            		<div className="row">
						            <div>
				            			<div className="callout-elem callout-elem-warning" style={{margin:'0px'}}>
					            			<h4 className="text-center">Categories</h4>
							                {this.state.categories.map((obj, index) => {
							                	return <p key={obj.catName}>
									                		{obj.groupName}{'-'}{obj.catDispName}
									                		<i key={obj.catName && `(_i)`} className="fa fa-times pull-right" style={{color:"red", fontSize:'1em'}}
									                					onClick={Action.DELETE_CATEGORY.bind(null, obj)}></i>
									                	</p>		
							                })}
						            	</div>
					            	</div>

			            		</div>
			            	</div>

						</div>
	            	</div>					
	            </div>
			)
	}
}


export default CategoryPage;