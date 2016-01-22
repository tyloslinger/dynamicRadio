import React from 'react';
import Action from '../../../actions/appActions';
import AppStore from '../../../stores/appStore';


class AsideNavSwitch extends React.Component{
	constructor(){
		super();
		this.state = {
			home: 'active',
			queue: '',
			playlistNumber: 0
		},
		this._onChange = this._onChange.bind(this);
	}
	componentWillMount(){
		AppStore.addChangeListener( this._onChange );
	}
	componentWillUnmount(){
		AppStore.removeChangeListener( this._onChange );
	}
	_onChange(){
		var _playlistNumber = AppStore.GetChannelPlayList(true);
		if(_playlistNumber != undefined){
			this.setState({playlistNumber: _playlistNumber.length});
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
	_allFunctions(activatePayload, switchMenuPayload){		
		Action.SWITCH_MENU(switchMenuPayload);
		this._setActive(activatePayload);
	}
	render(){
		return(
				<div className="sidebar-nav-switch">

				    <div className="btn-group switch">

					    <a className={`btn main-nav-link home ${this.state.home}`} data-nav-section="home"
					    	onClick={this._allFunctions.bind(this, 'home', {menu:'', queue:'hide'})}>
					        <span className="label">BROWSE</span>
					    </a>

					    <a className={`btn main-nav-link queue ${this.state.queue}`} data-nav-section="queue" 
					    	onClick={this._allFunctions.bind(this,'queue', {menu:'hide', queue:''})}>
					        <span className="label queue-label">
					            <span>QUEUE</span>
					            <span className="badge badge-primary ng-binding">{this.state.playlistNumber}</span>
					        </span>
					    </a>

				    </div>

			  </div>
			)
	}
}


export default AsideNavSwitch;