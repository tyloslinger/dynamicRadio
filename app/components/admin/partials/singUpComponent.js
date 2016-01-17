import React from 'react';

class ControlComponents extends React.Component{

	render(){
		return(
			
					<form className="form-horizontal" style={{margin: '15px'}}>
	                    <div className="form-group">
	                        <div className="input-group">
	                            <span className="input-group-addon">
	                                <span className="fa fa-phone"></span>
	                            </span>
	                            <input  type="text"
	                                    className="form-control"
	                                    placeholder="Phone number"
	                                    />
	                        </div>
	                    </div>
	                    <div className="form-group">
	                        <div className="input-group">
	                            <span className="input-group-addon">
	                                <span className="glyphicon glyphicon-envelope"></span>
	                            </span>
	                            <input type="email"
	                                   className="form-control"
	                                   placeholder="Email"
	                                   />
	                        </div>
	                    </div>	                    

	                    <div className="form-group">
	                        <p className="text-small">By clicking on Sign up, you agree to <a href="#" style={{color: '#EC5B3F'}}>terms & conditions</a> and <a href="#" style={{color: '#EC5B3F'}}>privacy policy</a></p>
	                        <div className="divider"></div>
	                        <a href="#/allChannels" className="btn btn-primary btn-block btn-lg">Sign up</a>
	                    </div>

	                </form>
               
			)
	}
}


class SignUpContainer extends React.Component{
	render(){
		return(
				<div >
				    <div className="container">
				    	<div className="row">
				    		<div className="col-md-5">
				    			<div className="text-center">
						            <h3>DYDIO. MORE THAN JUST RADIO CHANNELS</h3>
						        </div>
						        <div className="text-center">
						            <p>
						            	Get the best out of DYDIO when you sign up.
						            	Connect {"with"} like minded friends. Share your thoughts on social media and much more.						              
						            </p>

						            <p>
						            	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum condimentum magna, vel cursus turpis fermentum vel. Lorem 
						            	Vivamus diam diam, fermentum eros. Vivamus diam diam, fermentum sed dapibus eget, egestas sed eros. Lorem ipsum dolor sit amet,
						            	fermentum sed dapibus eget, egestas sed eros consectetur adipiscing elit.						              
						            </p>
						        </div>
				    		</div>

				    		<div className="col-md-6">
				    			<div className="front-title text-center">
						            <h3>SIGN UP</h3>
						        </div>						        

			    				<ControlComponents />				    								    		
				    		</div>				    		
				    	</div>
				    </div>
				</div>

			)
	}
}

class SignUpComponent extends React.Component{
	render(){
		return (
				<section id="content" className="animate-fade-up">
					<div className="page-front">
						<div className="hero-container">
						<SignUpContainer />
						</div>
					</div>
				</section>
			)
	}
}



export default SignUpComponent;