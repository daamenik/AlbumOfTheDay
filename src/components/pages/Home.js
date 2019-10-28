import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getLatestAlbums, getTopAlbums } from '../../store/actions/albums';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Home extends Component {

	static propTypes = {
		getLatestAlbums: PropTypes.func.isRequired,
		recentAlbums: PropTypes.array.isRequired,
		topAlbums: PropTypes.array.isRequired
	}

	componentDidMount() {
		this.props.getLatestAlbums();
		this.props.getTopAlbums();
	}

	generateAlbumDisplay(list, includeRating=false) {
		return list.map(album => (
			<span className="mini-album-display" key={album.id}>
				<a href={`/albums/${album.id}/`}>
					<img height="100" src={album.cover_url} alt={album.title}/>
				</a>
				<div className="mini-album-description">
					<p>
						{album.date_submitted}<br />
						<strong>{album.title}</strong><br />
						<em>{album.artist}</em><br />
						{includeRating ? <strong>{album.average_rating}/10</strong> : null}
					</p>
				</div>
			</span>
		));
	}

	render() {

		// creating the row of recent albums
		var recentAlbumsList = this.generateAlbumDisplay(this.props.recentAlbums.slice(1, 7));
		var topAlbumsList = this.generateAlbumDisplay(this.props.topAlbums, true);

		var currentAlbum = this.props.recentAlbums[0];
		var currentAlbumDisplay = currentAlbum ? (
			<Fragment>
				<div id="todays-album">
					<div className="row">
						<span className="col-lg-5 today-text">
								<strong>
									TODAY'S<br/>
									ALBUM
								</strong>
						</span>
						<span className="col-lg-2 text-center">
							<img height="100" src={currentAlbum.cover_url} alt={currentAlbum.title}/>
						</span>
						<span className="col-lg-5 text-left">
							<p>
								{currentAlbum.title} <br/>
								{currentAlbum.artist} <br/>
								{currentAlbum.genre} • {currentAlbum.year}
							</p> 
						</span>
					</div>
				</div>
				<div className="text-center">
					<Link to={`/albums/${currentAlbum.id}`}>
						<button className="btn-primary">
							Rate it!
						</button>
					</Link>
				</div>
			</Fragment>
		) : null;

		return (
			<div id="homepage">
				<h1 className="text-center header">Welcome to the Album of the Day club!</h1>
				{currentAlbumDisplay}
				<div id="recent-albums" className="multiple-albums">
					<p>Recent Albums</p>
					<div>
						{recentAlbumsList}
					</div>
				</div>
				<div id="top-albums" className="multiple-albums">
					<p>Top Rated Albums</p>
					<div>
						{topAlbumsList}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		recentAlbums: state.albums.mostRecent,
		topAlbums: state.albums.topRated
	}
}

export default connect(mapStateToProps, { getLatestAlbums, getTopAlbums })(Home);