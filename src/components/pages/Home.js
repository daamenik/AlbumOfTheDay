import React, { Component } from 'react'

class Home extends Component {
	render() {
		return (
			<div id="homepage">
				<h1 className="text-center header">Welcome to the Album of the Day club!</h1>
				<div id="todays-album">
					<div className="row">
						<div className="col-lg-5 today-text">
								<strong>
									TODAY'S<br/>
									ALBUM
								</strong>
						</div>
						<div className="col-lg-2 text-center">
							<img height="100" src="https://i.scdn.co/image/ab67616d0000b273fce23dadb51975ebf2e9d75c" alt="Because the Internet"/>
						</div>
						<div className="col-lg-5 text-left">
							<p>
								Because The Internet <br/>
								Childish Gambino <br/>
								Twitter Rap • 2013
							</p> 
						</div>
					</div>
				</div>
				<div className="text-center">
					<button className="btn-primary">
						Rate it!
					</button>
				</div>
				<div id="recent-albums" className="multiple-albums">
					<p>Recent Albums</p>
					<div>
						<span className="mini-album-display">
							<img height="100" src="http://f0.bcbits.com/img/a1652238611_10.jpg" alt="FreeFallin"/>
							<div className="mini-album-description">
								<p>
									4-13-2019<br />
									<strong>THE REMIXES, VOL. 3</strong><br />
									<em>Infinitefreefall</em>
								</p>
							</div>
						</span>
						<span className="mini-album-display">
							<img height="100" src="http://f0.bcbits.com/img/a1652238611_10.jpg" alt="FreeFallin"/>
							<div className="mini-album-description">
								<p>
									4-13-2019<br />
									<strong>THE REMIXES, VOL. 3</strong><br />
									<em>Infinitefreefall</em>
								</p>
							</div>
						</span>
						<span className="mini-album-display">
							<img height="100" src="http://f0.bcbits.com/img/a1652238611_10.jpg" alt="FreeFallin"/>
							<div className="mini-album-description">
								<p>
									4-13-2019<br />
									<strong>THE REMIXES, VOL. 3</strong><br />
									<em>Infinitefreefall</em>
								</p>
							</div>
						</span>
						<span className="mini-album-display">
							<img height="100" src="http://f0.bcbits.com/img/a1652238611_10.jpg" alt="FreeFallin"/>
							<div className="mini-album-description">
								<p>
									4-13-2019<br />
									<strong>THE REMIXES, VOL. 3</strong><br />
									<em>Infinitefreefall</em>
								</p>
							</div>
						</span>
						<span className="mini-album-display">
							<img height="100" src="http://f0.bcbits.com/img/a1652238611_10.jpg" alt="FreeFallin"/>
							<div className="mini-album-description">
								<p>
									4-13-2019<br />
									<strong>THE REMIXES, VOL. 3</strong><br />
									<em>Infinitefreefall</em>
								</p>
							</div>
						</span>
					</div>
				</div>
				<div id="top-albums" className="multiple-albums">
					<p>Top Rated Albums</p>
					<div>
						<span className="mini-album-display">
							<img height="100" src="https://images-na.ssl-images-amazon.com/images/I/61Z8Z5i%2BM8L._SX355_.jpg" alt="FreeFallin"/>
							<div className="mini-album-description">
								<p>
									4-13-2019<br />
									<strong>MARVIN'S MARVELOUS MECHANICAL MUSEUM</strong><br />
									<em>Tally Hall</em>
								</p>
							</div>
						</span>
						<span className="mini-album-display">
							<img height="100" src="https://images-na.ssl-images-amazon.com/images/I/61Z8Z5i%2BM8L._SX355_.jpg" alt="FreeFallin"/>
							<div className="mini-album-description">
								<p>
									4-13-2019<br />
									<strong>MARVIN'S MARVELOUS MECHANICAL MUSEUM</strong><br />
									<em>Tally Hall</em>
								</p>
							</div>
						</span>
						<span className="mini-album-display">
							<img height="100" src="https://images-na.ssl-images-amazon.com/images/I/61Z8Z5i%2BM8L._SX355_.jpg" alt="FreeFallin"/>
							<div className="mini-album-description">
								<p>
									4-13-2019<br />
									<strong>MARVIN'S MARVELOUS MECHANICAL MUSEUM</strong><br />
									<em>Tally Hall</em>
								</p>
							</div>
						</span>
						<span className="mini-album-display">
							<img height="100" src="http://f0.bcbits.com/img/a1652238611_10.jpg" alt="FreeFallin"/>
							<div className="mini-album-description">
								<p>
									4-13-2019<br />
									<strong>THE REMIXES, VOL. 3</strong><br />
									<em>Infinitefreefall</em>
								</p>
							</div>
						</span>
						<span className="mini-album-display">
							<img height="100" src="https://images-na.ssl-images-amazon.com/images/I/61Z8Z5i%2BM8L._SX355_.jpg" alt="FreeFallin"/>
							<div className="mini-album-description">
								<p>
									4-13-2019<br />
									<strong>MARVIN'S MARVELOUS MECHANICAL MUSEUM</strong><br />
									<em>Tally Hall</em>
								</p>
							</div>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;