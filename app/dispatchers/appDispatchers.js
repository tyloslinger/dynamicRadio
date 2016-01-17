import { Dispatcher } from 'flux';

const flux = new Dispatcher();

export function register(callback){
	//console.log("callback registered: ", callback);
	return flux.register(callback);
}

export function dispatch(actionType, payload){
	//console.log("FROM DISPATCHER: actionType: ", actionType, " payload: ", payload)
	flux.dispatch(actionType, payload);
}