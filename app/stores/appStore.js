import { dispatch, register } from '../dispatchers/appDispatchers';
import AppConstants from '../constants/appConstants';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

var _menuVal; 
var _mini_MenuVal;
var _loginVal;

const _hideMenu = () => {
	return _menuVal = false;
};

const _showMenu = () => {
	return _menuVal = true;
};

const _login = (payload) => {
	return _loginVal = {		
		userType: payload.userType,
		userName: payload.userName,
		password: payload.password,
		phoneNumber: payload.phoneNumber,
		email: payload.email,
		loginProcessed: true,
		status: true
	};
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
		return _menuVal;
	},
	MiniMenuStatus(){
		return _mini_MenuVal;
	},
	CheckLoginStatus(){		
		return _loginVal;
	},
	dispatcherIndex: register( function(action){
		console.log("FROM STORES");
		switch(action.actionType){
			case AppConstants.HIDE_TOPMENU:
				_hideMenu();
				console.log(AppConstants.HIDE_TOPMENU, " is called with value: ", _menuVal);
			break;
			case AppConstants.SHOW_TOPMENU:
				_showMenu();
				console.log(AppConstants.SHOW_TOPMENU, " is called with value: ", _menuVal);
			break;
			case AppConstants.SHOW_MINIMENU:
				_mini_MenuVal = !action.payload;
				console.log(AppConstants.SHOW_MINIMENU, " is value: ", _mini_MenuVal);
			break;
			case AppConstants.LOGIN:
				_login(action.payload);
				console.log(AppConstants.LOGIN, " payload: ", action.payload, " is value: ", _loginVal);
			break;
		}

		AppStore.emitChange();
	})
});

export default AppStore;