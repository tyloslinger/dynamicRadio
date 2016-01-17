import { dispatch, register } from '../dispatchers/appDispatchers';
import AppConstants from '../constants/appConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _hideMenuVal; var _miniMenuVal;
const _hideMenu = () => {
	return _hideMenuVal = false;
};

const _showMenu = () => {
	return _hideMenuVal = true;
}

const AppStore = Object.assign(EventEmitter.prototype, {
	emitChange(){
		this.emit( CHANGE_EVENT )
	},
	addChangeListener( callback ){
		this.on(CHANGE_EVENT, callback)
	},
	removeChangeListener( callback ){
		this.removeListener(CHANGE_EVENT, callback )
	},	
	MenuStatus(){		
		return _hideMenuVal;
	},
	MiniMenuStatus(){
		return _miniMenuVal;
	},
	dispatcherIndex: register( function(action){
		console.log("FROM STORES");
		switch(action.actionType){
			case AppConstants.HIDE_TOPMENU:
				_hideMenu();
				console.log(AppConstants.HIDE_TOPMENU, " is called with value: ", _hideMenuVal);
			break;
			case AppConstants.SHOW_TOPMENU:
				_showMenu();
				console.log(AppConstants.SHOW_TOPMENU, " is called with value: ", _hideMenuVal);
			break;
			case AppConstants.SHOW_MINIMENU:
				_miniMenuVal = !action.payload;
				console.log(AppConstants.SHOW_MINIMENU, " is value: ", _miniMenuVal);
			break;
		}

		AppStore.emitChange();
	})
});

export default AppStore;