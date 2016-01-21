import React from 'react';
import Action from '../../../actions/appActions';


class AsideNavSwitch extends React.Component{
	constructor(){
		super();
		this.state = {
			home: 'active',
			queue: ''
		}
	}
	_setActive(label){
		switch(label){
			case 'home':
				this.setState({
					home: 'active',
					queue: ''
				})
			break;
			case 'queue':
				this.setState({
					home: '',
					queue: 'active'
				})
			break;
		}		
	}
	render(){
		return(
				<div className="sidebar-nav-switch">

				    <div className="btn-group switch">

					    <a className={`btn main-nav-link home ${this.state.home}`} data-nav-section="home"
					    	onClick={Action.SWITCH_MENU.bind(null,{menu:'', queue:'hide'})}>
					        <span className="label"
					        	onClick={this._setActive.bind(this, 'home')}>BROWSE</span>
					    </a>

					    <a className={`btn main-nav-link queue ${this.state.queue}`} data-nav-section="queue" 
					    	onClick={Action.SWITCH_MENU.bind(null,{menu:'hide', queue:''})}>
					        <span className="label queue-label">
					            <span
					            	onClick={this._setActive.bind(this, 'queue')}>QUEUE</span>
					            <span className="badge badge-primary ng-binding">0</span>
					        </span>
					    </a>

				    </div>

			  </div>
			)
	}
}


export default AsideNavSwitch;