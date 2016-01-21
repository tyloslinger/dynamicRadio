const genServiceAPI = {

	//LOGIN 
	_login(payload){
	    return	{		
			userType: payload.userType,
			userName: payload.userName,
			password: payload.password,
			phoneNumber: payload.phoneNumber,
			email: payload.email,
			loginProcessed: true,
			status: true
		};	
	},


	//SWITCH CURRENT PAGE
	_switchPage(payload){		
		return {
			pageEnabled: true,
			pageName: payload.pageName,
			page: payload.page
		}
	},


	_switchMenu(payload){
		return{
			menu: payload.menu,
			queue: payload.queue
		}
	},

	//HIDE SIDE MENU
	_hideMenu(){
		return false;
	},
	//SHOW SIDE MENU
	_showMenu(){
		return true;
	}
}

export default genServiceAPI;