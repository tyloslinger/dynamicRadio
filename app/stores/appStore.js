import { dispatch, register } from '../dispatchers/appDispatchers';
import AppConstants from '../constants/appConstants';
import { EventEmitter } from 'events';

import CategoryAPI from '../API/categoryAPI';

const CHANGE_EVENT = 'change';

var _menuVal; 
var _mini_MenuVal;
var _loginVal;
var _pageObject;

const _setActivePage = (payload) => {	
	_pageObject = {
		pageEnabled: true,
		currentPage: payload.pageName,
		page: payload.page
	}
}

const _hideMenu = () => {
	return _menuVal = false;
};

const _showMenu = () => {
	return _menuVal = true;
};

const _login = (payload) => {
    _loginVal = {		
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
	CheckActivePage(){
		return _pageObject;
	},
	dispatcherIndex: register( function(action){
		console.log("FROM STORES");
		switch(action.actionType){
			case AppConstants.HIDE_TOPMENU:
				_hideMenu();				
			break;
			case AppConstants.SHOW_TOPMENU:
				_showMenu();				
			break;
			case AppConstants.SHOW_MINIMENU:
				_mini_MenuVal = !action.payload;				
			break;
			case AppConstants.LOGIN:
				_login(action.payload);				
			break;
			case AppConstants.ENABLE_PAGE:
				_setActivePage(action.payload);
				CategoryAPI.addNewCategory(action.payload);				
			break;
		}

		AppStore.emitChange();
	})
});

export default AppStore;