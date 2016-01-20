import React from 'react';
import Action from './actions/appActions';


class HomeHeader extends React.Component{

	render(){
		return(
				<header className="navbar navbar-static-top bs-docs-nav" id="top" role="banner">
				    <div className="container">
				      	<div className="navbar-header">
					        <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
					        	<span className="sr-only">Toggle navigation</span>
					          	<span className="icon-bar"></span>
					          	<span className="icon-bar"></span>
					          	<span className="icon-bar"></span>
					        </button>
					        <a href="#/" className="navbar-brand"><i className="fa fa-headphones fa-2x"></i></a>
				      	</div>
				      	<nav className="collapse navbar-collapse bs-navbar-collapse">

					        <ul className="nav navbar-nav navbar-right">						        
						        <li><a href="#/artist-list">Search Channels</a></li>
						        <li><a href="#/albums">All Channels</a></li>
						        <li><a href="#/">About</a></li>
					        </ul>
				      	</nav>
				    </div>
				</header>
			)
	}
}


class HeroContainer extends React.Component{

	render(){
		return(
				<div className="hero-container">
				    <div className="text-center top-header-text">
				      <div className="front-title">
				      	<h1>dydio</h1>
				        <h2>{"Radio"} channels {"for"} EVERYONE</h2>
				      </div>
				      <div className="front-message">
				        <p>{"Select"} your favorite News / Artist channels from a wide range.</p>
				        <p>Schedule when you want to listen to which channel.</p>
				        <p>Share {"with"} your friends.</p>
				      </div>
				      <div>
				        <a href="#/signUp/233" className="btn btn-primary">
				          Join DYDIO
				        </a>
				        &nbsp;&nbsp;				        
				        <a className="btn btn-bordered btn-bordered-white">
				          OR
				        </a>
				        &nbsp;&nbsp;
				        <a href="#/allChannels" className="btn btn-primary">
				          Just Listen AWAY{"!!!"}
				        </a>
				      </div>

				    </div>				    
				</div>
			)
	}
}

class Home extends React.Component{
	constructor(){
		super();		
	}
	componentWillMount(){
		Action.HIDE_TOPMENU();
	}
	componentWillUnmount(){
		Action.SHOW_TOPMENU();
	}
	render(){
		return(				
				<section id="content" className="animate-fade-up">
					<div className="page-front">
						<HomeHeader />
						<HeroContainer />
					</div>
				</section>				
			)
	}
}

export default Home