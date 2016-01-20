import React from 'react';
import Action from '../../../actions/appActions';
import AppStore from '../../../stores/appStore';
import AppConstants from '../../../constants/appConstants';

import DashBoardInfo from './dasboardInfo';
import CategoryPage from './categoryPage';

class AddChannelUniPage extends React.Component{
	constructor(){
		super();
		this.state = {
			pageEnabled: false,
			page: '',
			currentPage: 'nothing yet'
		}
		this._onChange = this._onChange.bind(this);
	}	
	componentWillMount(){
		AppStore.addChangeListener( this._onChange );
	}
	componentWillUnmount(){
		AppStore.removeChangeListener( this._onChange );
	}
	_onChange(){
		this.setState(AppStore.CheckActivePage());		
	}	
	componentDidUpdate(prevProps, prevState) {
		
			
	}
	render(){
		return(
				<div>{this.state.pageEnabled 
					?
						<section className="panel panel-default">
					        <div className="panel-heading"><i className="fa fa-list panel-ico"></i>{this.state.pageName}</div>
					        <div className="panel-body ng-scope" data-ng-controller="NotifyCtrl">
					            {this.state.pageEnabled 
					            	?
					            		this.state.page === AppConstants.CATEGORY_PAGE
					            			?
					            				<CategoryPage />
					            			:
					            				this.state.page === AppConstants.CHANNEL_PAGE
					            					?
					            						<ChannelPage />
					            					:					            						
					            						this.state.page === AppConstants.USER_PAGE
					            							?
					            								<UserPage />
					            							:
					            								null
					            	:
					            		null
					            }
					        </div>
					    </section>
					:
						null}
			 	</div>
			)
	}
}

class AddChannelPage extends React.Component{

	render(){
		return(	
			<section id="content" className="animate-fade-up">
				<div className="page ng-scope">
					<DashBoardInfo />
					<AddChannelUniPage />			            	
				</div>
			</section>
			)
	}
}


export default AddChannelPage;