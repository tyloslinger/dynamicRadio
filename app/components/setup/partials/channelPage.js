import React from 'react';
import Action from '../../../actions/appActions';
import AppStore from '../../../stores/appStore';
import guid from 'uuid';


class ChannelPage extends React.Component{
	constructor(){
		super();
		this.state = {
			channelName: '',
			channelDispName: '',
			channels:[],			
			catGroups:[],
			selectedCatGroup:'',
			categories: [],
			selectedCategory: ''
		}

		this._onChange = this._onChange.bind(this);
	}
	componentWillMount(){
		AppStore.addChangeListener( this._onChange );
	}
	componentWillUnmount(){
		AppStore.removeChangeListener( this._onChange );
	}
	componentDidMount(){
		this.setState({			
			catGroups: AppStore.GetCategoryGroup()
		})
	}
	_onChange(){
		this.setState({
			channels: AppStore.GetChannels(undefined),
			catGroups: AppStore.GetCategoryGroup()			
		})
	}
	handleTextChange(label, text){
		switch(label){
			case 'channelName':
				this.setState({channelName: text.target.value});
			break;
			case 'channelDispName':
				this.setState({channelDispName: text.target.value});
			break;
		}
	}
	handleSelect(label, text){		
		switch(label){
			case 'catGroup':					
				//get category related
				this.setState({
					categories: AppStore.GetCategories({groupName: text.target.value})
				});
			break;
			case 'category':
				this.setState({
					selectedCategory: text.target.value
				})
			break;
		}
	}
	handleClear1(){
		this.setState({
			channelName: '',
			channelDispName: ''
		})
	}
	render(){				
		return(			
				<div className="row">					            	
	            	<div className="col-md-12">
	            		<div className="row">
		            		<div className="callout-elem callout-elem-info text-center">
				                <h4>blah blah blah for channel</h4>
				                <p>Lorem ipsum dolor sit amet, Lorem Ipsum is simply dummy text. Assumenda, alias, in accusantium totam adipisci vel et suscipit quidem libero pariatur minus ratione quo doloremque error at nemo incidunt dicta quia?</p>
				            </div>
			            </div>

	            		<div className="row">
	            			<div className='col-md-12'>
	            				<div className='col-md-6'>
	            					<select className='form-control' onChange={this.handleSelect.bind(this, 'catGroup')}>
	            						<option value=''>--select Group--</option>
	            						{this.state.catGroups.map((obj, index) => {
	            							return <option key={obj.groupName} value={obj.groupName}>{obj.groupName}</option>
	            						})}
	            					</select>
	            				</div>
	            				<div className='col-md-6'>
	            					<select className='form-control' onChange={this.handleSelect.bind(this, 'category')}>
	            						<option value=''>--select Category--</option>
	            						{this.state.categories.map((obj, index) => {
	            							return <option key={obj.catName} value={obj.catDispName}>{obj.catDispName}</option>
	            						})}
	            					</select>
	            				</div>	            				
	            			</div>	            			
	            		</div>

	            		<div className='row'>
	            			<div className="form-group">
	            				{this.state.selectedCategory != ''
	            					?
	            						<h4>
			            					Selected Category: <strong className="alert-default">{this.state.selectedCategory}</strong>
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
										<input type='text' placeholder='--enter channel Name--' className='form-control' disabled={this.state.selectedCategory === ''}
											value={this.state.channelName} onChange={this.handleTextChange.bind(this, 'channelName')}/>																		
									</div>
								</div>

								<div className="form-group">
									<div className="input-group">
										<span className="input-group-addon">
			                                <span className="fa fa-pencil"></span>
			                            </span>
										<input type='text' placeholder='--enter display Name--' className="form-control" disabled={this.state.selectedCategory === ''}
											value={this.state.channelDispName} onChange={this.handleTextChange.bind(this, 'channelDispName')}/>
									</div>
								</div>
								
								<div className="form-group pull-right">
									<button className="btn btn-default btn-width-xs" disabled={this.state.selectedCategory === ''}
										onClick={Action.ADD_NEW_CHANNEL.bind(null, {
											channelName: this.state.channelName,
											channelDispName: this.state.channelDispName,
											catName: this.state.selectedCategory,
											channelId: guid.v1()
										})}>Save</button>
									<button className='btn btn-info btn-width-xs'
										onClick={this.handleClear1.bind(this)} disabled={this.state.selectedCategory === ''}
										>Clear</button>
								</div>
							</div>

							<div className="col-md-5">
			            		<div className="row">
						            <div>
				            			<div className="callout-elem callout-elem-info" style={{margin:'0px'}}>
					            			<h4 className="text-center">Channels</h4>
							                {this.state.channels.map((obj, index) => {
							                	return <p key={obj.channelName}>
									                		{obj.channelName}{'-'}{obj.channelName}
									                		<i key={obj.channelName && `(_i)`} className="fa fa-times pull-right" style={{color:"red", fontSize:'1em'}}
									                					onClick={Action.DELETE_CHANNEL.bind(null, obj)}></i>
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


export default ChannelPage;