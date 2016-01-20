import { dispatch, register } from '../dispatchers/appDispatchers';
import AppConstants from '../constants/appConstants';
import { EventEmitter } from 'events';


/*IMPORT APIS*/
import CategoryAPI from '../storesAPI/categoryAPI';
import GenericServicesAPI from '../storesAPI/genServicesAPI';



const CHANGE_EVENT = 'change';

var _menuVal; 
var _mini_MenuVal;
var _loginVal;
var _pageObject;


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
		//console.log("FROM STORES");
		switch(action.actionType){
			case AppConstants.HIDE_TOPMENU:
				_menuVal = GenericServicesAPI._hideMenu();				
			break;
			case AppConstants.SHOW_TOPMENU:
				_menuVal = GenericServicesAPI._showMenu();				
			break;
			case AppConstants.SHOW_MINIMENU:
				_mini_MenuVal = !action.payload;				
			break;
			case AppConstants.LOGIN:
				_loginVal = GenericServicesAPI._login(action.payload);				
			break;
			case AppConstants.SWITCH_PAGE:				
				_pageObject = GenericServicesAPI._switchPage(action.payload);
			break;			
		}

		AppStore.emitChange();
	})
});

export default AppStore;