import { dispatch, register } from '../dispatchers/appDispatchers';
import AppConstants from '../constants/appConstants';
import { EventEmitter } from 'events';


/*IMPORT APIS*/
import CategoryAPI from '../storesAPI/categoryAPI';
import ChannelAPI from '../storesAPI/channelAPI';
import GenericServicesAPI from '../storesAPI/genServicesAPI';



const CHANGE_EVENT = 'change';

var _menuVal; 
var _mini_MenuVal;
var _loginVal;
var _pageObject;
var _switchedMenu;



const AppStore = Object.assign(EventEmitter.prototype, {

	//EMITTER METHOD
	emitChange(){
		this.emit( CHANGE_EVENT )
	},

	//LISTENERS
	addChangeListener( callback ){
		this.on(CHANGE_EVENT, callback)
	},
	removeChangeListener( callback ){
		this.removeListener(CHANGE_EVENT, callback )
	},	


	//MENU METHODS
	MenuStatus(){		
		return _menuVal;
	},
	MiniMenuStatus(){
		return _mini_MenuVal;
	},
	GetSwitchedMenu(){		
		return _switchedMenu;
	},


	//LOGIN METHODS
	CheckLoginStatus(){		
		return _loginVal;
	},

	//PAGE METHODS
	CheckActivePage(){
		return _pageObject;
	},

	//CATEGORY METHODS
	GetCategories(payload){		
		return CategoryAPI._getCategories(payload);
	},
	GetCategoryGroup(){				
		return CategoryAPI.categoryGroup;
	},


	//CHANNEL METHODS	
	GetChannels(payload){
		return ChannelAPI._getChannels(payload);
	},
	GetChannelPlayList(isGetAll){
		if(!isGetAll)
			return ChannelAPI.currentChannel;
		else
			return ChannelAPI.channelPlaylist;
	},
	GetChannelStatus(channelId){			
		return ChannelAPI._getChannelStatus('');
	},

	//DISPATCHER
	dispatcherIndex: register( function(action){
		//console.log("FROM STORES");
		switch(action.actionType){

			//TOP AND SIDE MENU
			case AppConstants.HIDE_TOPMENU:
				_menuVal = GenericServicesAPI._hideMenu();				
			break;
			case AppConstants.SHOW_TOPMENU:
				_menuVal = GenericServicesAPI._showMenu();				
			break;
			case AppConstants.SHOW_MINIMENU:
				_mini_MenuVal = !action.payload;				
			break;
			case AppConstants.SWITCH_MENU:
				_switchedMenu = action.payload;				
			break;


			//LOGIN
			case AppConstants.LOGIN:
				_loginVal = GenericServicesAPI._login(action.payload);				
			break;
			case AppConstants.SWITCH_PAGE:				
				_pageObject = GenericServicesAPI._switchPage(action.payload);
			break;


			//CATEGORIES
			case AppConstants.ADD_NEW_CATEGORY_GROUP:
				CategoryAPI._addNewCategoryGroup(action.payload);				
			break;
			case AppConstants.ADD_NEW_CATEGORY:
				CategoryAPI._addNewCategory(action.payload);
			break;
			case AppConstants.DELETE_CATEGORY:
				CategoryAPI._deleteCategory(action.payload);
			break;



			//CHANNELS
			case AppConstants.ADD_NEW_CHANNEL:
				ChannelAPI._addNewChannel(action.payload);
			break;
			case AppConstants.DELETE_CHANNEL:
				ChannelAPI._deleteChannel(action.payload);
			break;
			case AppConstants.ADD_CHANNEL_TO_PLAYLIST:
				ChannelAPI._addToChannelPlaylist(action.payload);				
			break;
			case AppConstants.DELETE_CHANNEL_FROM_PLAYLIST:
				ChannelAPI._deleteFromChannelPlaylist(action.payload);
			break;
			case AppConstants.STREAM_CHANNEL:
				ChannelAPI._streamChannel(action.payload);
				// if(action.payload.worker != -1){
				// 	if(action.payload.preStream === 1){		
				// 		console.log("called prestream:")
				// 		ChannelAPI._preStreamingChannel(action.payload);
				// 	}else if(action.payload.preStream === 2 && action.payload.worker === 2){
				// 		console.log("called stream:")
				// 		ChannelAPI._updateWorker(-1);
				// 		ChannelAPI._streamChannel(action.payload);						
				// 	}
				// }
			break;
		}

		AppStore.emitChange();
	})
});

export default AppStore;