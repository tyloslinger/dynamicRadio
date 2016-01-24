import React from 'react';
import AllChannelItem from './allChannelItem';
import guid from 'uuid';


class AllChannelItemList extends React.Component{
	constructor(){
		super();

		this.state = {
			foreign: 'active',
			local: '',
			aritst: '',	
			 foreignChannelData : [
			 			{
							channelImg: "../assets/images/albums/bbc1.jpeg",
							channelName: 'BBC NEWS UK',
							category: 'FOREIGN_NEWS',
							channelId: guid.v4(),
							channelUrls: ['http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p']
						},
						{
							channelImg: "../assets/images/albums/cnn.png",
							channelName: 'CNN',
							category: 'FOREIGN_NEWS',
							channelId: guid.v4(),
							channelUrls: ['http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio2_mf_p']
						},
						{
							channelImg: "../assets/images/albums/bbc3.png",
							channelName: 'BBC ARTS',
							category: 'FOREIGN_NEWS',
							channelId: guid.v4(),
							channelUrls: ['http://open.live.bbc.co.uk/mediaselector/5/select/version/2.0/mediaset/http-icy-aac-lc-a/format/pls/vpid/bbc_radio_three.pls']
						},
						{
							channelImg: "../assets/images/albums/aljazeera.jpeg",
							channelName: 'ALJAZEERA',
							category: 'FOREIGN_NEWS',
							channelId: guid.v4(),
							channelUrls: ['http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4fm_mf_p']
						},				
						{
							channelImg: "../assets/images/albums/bbc4.jpg",
							channelName: 'BBC Earth',
							category: 'FOREIGN_NEWS',
							channelId: guid.v4(),
							channelUrls: ['http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio5live_mf_p']
						}],
			localChannelData:[
						{
							channelImg: "../assets/images/albums/joy1.png",
							channelName: 'Joy FM',
							category: 'LOCAL_NEWS',
							channelId: guid.v4(),
							channelUrls: ['http://67.159.60.45:8000']
						},
						{
							channelImg: "../assets/images/albums/city.jpg",
							channelName: 'City FM',
							category: 'LOCAL_NEWS',
							channelId: guid.v4(),
							channelUrls: []
						},
						{
							channelImg: "../assets/images/albums/radioFlash.jpeg",
							channelName: 'Radio Flash',
							category: 'LOCAL_NEWS',
							channelId: guid.v4(),
							channelUrls: []
						},
						{
							channelImg: "../assets/images/albums/Y.jpeg",
							channelName: 'Y FM',
							category: 'LOCAL_NEWS',
							channelId: guid.v4(),
							channelUrls: []
						},				
						{
							channelImg: "../assets/images/albums/happy.jpeg",
							channelName: 'Happy FM',
							category: 'LOCAL_NEWS',
							channelId: guid.v4(),
							channelUrls: []
						}]
			}
	}
	_setActive(label){
		switch(label){
			case 'foreign':
				this.setState({
					local: '',
					foreign: 'active',
					artist:''
				})				
			break;
			case 'local':
				this.setState({
					local: 'active',
					foreign: '',
					artist:''
				})
			break;
			case 'artist':
				this.setState({
					local: '',
					foreign: '',
					artist:'active'
				})
			break;
		}
	}
	render(){
		return(
				<section>
			        <section className="panel panel-default panel-default-clean">
				          	<div className="panel-body panel-body--dashboard">
				          		<div className="ui-tab">
					          		<ul className="nav nav-tabs" >
						            	<li heading="Foreign Channels" className={this.state.foreign}
						            		onClick={this._setActive.bind(this, 'foreign')}>
										  	<a>Foreign Channels</a>
										</li>

										<li heading="Local Channels" className={this.state.local}
											onClick={this._setActive.bind(this, 'local')}>
										  	<a>Local Channels</a>
										</li>

										<li heading="Artists Channels" className={this.state.artist}
											onClick={this._setActive.bind(this, 'artist')}>
										  	<a>Artists Channels</a>
										</li>
							        </ul>
					          		<div className="tab-content">
	              						<div id="foreign" className={`tab-pane ${this.state.foreign}`} >
							          		<div className="divider"></div>
							          		<div className="row music-covers-listing minified">
								          		{this.state.foreignChannelData.map(function(_data, index) {
								          			return <AllChannelItem key={index} data={_data}/>
												})}
											</div>
										</div>

										<div id="local" className={`tab-pane ${this.state.local}`}>
							          		<div className="divider"></div>
							          		<div className="row music-covers-listing minified">
								          		{this.state.localChannelData.map(function(_data, index) {
													return <AllChannelItem key={index} data={_data}/>
												})}
											</div>
										</div>
										
									</div>
								</div>

								
				          	</div>
			        </section>
			    </section>
			)
	}
}


export default AllChannelItemList;
