import { Dispatcher } from 'flux';

const flux = new Dispatcher();

export function register(callback){
	//console.log("callback registered: ", callback);
	return flux.register(callback);
}

export function dispatch(actionType, payload){
	//console.log("FROM DISPATCHER: action: ", actionType)
	flux.dispatch(actionType, payload);
}