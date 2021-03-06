import AppConstants from '../constants/appConstants';
import { dispatch, register } from '../dispatchers/appDispatchers';

export default{
	ADD_NEW_USER(payload){
		dispatch({
			actionType: AppConstants.ADD_NEW_USER,
			payload: payload
		}, payload)
	},
	ADD_NEW_USER_PAGE()	{
		dispatch({
			actionType: AppConstants.ADD_NEW_USER_PAGE,
			payload: true
		}, true)
	},




	ADD_NEW_CHANNEL(payload){
		dispatch({
			actionType: AppConstants.ADD_NEW_CHANNEL, 
			payload: payload
		}, payload)
	},	
	DELETE_CHANNEL(payload){
		dispatch({
			actionType: AppConstants.DELETE_CHANNEL, 
			payload: payload
		}, payload)
	},
	ADD_CHANNEL_TO_PLAYLIST(payload){
		dispatch({
			actionType: AppConstants.ADD_CHANNEL_TO_PLAYLIST,
			payload: payload
		}, payload)		
	},
	DELETE_CHANNEL_FROM_PLAYLIST(payload){
		dispatch({
			actionType: AppConstants.DELETE_CHANNEL_FROM_PLAYLIST,
			payload: payload
		}, payload)
	},
	STREAM_CHANNEL(payload){
		dispatch({
			actionType: AppConstants.STREAM_CHANNEL,
			payload: payload
		}, payload)
	},




	ADD_NEW_CATEGORY_GROUP(payload){
		dispatch({
			actionType: AppConstants.ADD_NEW_CATEGORY_GROUP,
			payload: payload
		}, payload)
	},
	ADD_NEW_CATEGORY(payload){
		dispatch({
			actionType: AppConstants.ADD_NEW_CATEGORY,
			payload: payload
		}, payload)
	},	
	DELETE_CATEGORY(payload){
		dispatch({
			actionType: AppConstants.DELETE_CATEGORY,
			payload: payload
		}, payload)
	},


	HIDE_TOPMENU(){
		dispatch({			
			actionType: AppConstants.HIDE_TOPMENU, 
			payload: null
		}, null)		
	},

	SHOW_TOPMENU(){
		dispatch({
			actionType: AppConstants.SHOW_TOPMENU,
			payload: null
		}, null)
	},

	SHOW_MINIMENU(payload){	
		dispatch({
			actionType: AppConstants.SHOW_MINIMENU,
			payload: payload
		}, payload)
	},
	SWITCH_MENU(payload){
		dispatch({
			actionType: AppConstants.SWITCH_MENU,
			payload: payload
		},payload)
	},



	LOGIN(payload){
		dispatch({
			actionType: AppConstants.LOGIN,
		    payload: payload
		}, payload)
	},


	SWITCH_PAGE(payload){
		dispatch({
			actionType: AppConstants.SWITCH_PAGE,
			payload: payload
		}, payload)
	}

}