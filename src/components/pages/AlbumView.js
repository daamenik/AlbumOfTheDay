import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleAlbum } from '../../store/actions/albums';
import PropTypes from 'prop-types';
import '../../App.css';
import AlbumRatings from '../AlbumRatings';
// import ratings from '../../store/reducers/ratings';

export class AlbumView extends Component {
	static propTypes = {
		albums: PropTypes.array.isRequired,
		getSingleAlbum: PropTypes.func.isRequired
	}

	componentDidMount() {
		const { albumId } = this.props.match.params;
		this.props.getSingleAlbum(albumId);
	}

	render() {
		if(this.props.albums[0]) {
			const { title, artist, genre, year, coverUrl } = this.props.albums[0];

			let albumRating = 8;
			let ratingColor = "";
			if (albumRating < 2.5) {
				ratingColor = "darkred";
			} else if (albumRating < 5) {
				ratingColor = "red";
			} else if (albumRating === 5) {
				ratingColor = "yellow";
			} else if (albumRating < 7.5) {
				ratingColor = "green";
			} else {
				ratingColor = "darkgreen";
			}

			let ratingStyle = {
				color: ratingColor
			};

			return (
				<div className="container">
					<div className="single-album-display">
						<div className="row center">
							<div className="col album-cover">
								<img height="350" src={coverUrl} alt="Album cover" />
								<p>Sumbitted by Cole McReynolds</p>
							</div>
							<div className="col">
								<div className="album-description">
									<u>10-22-19</u>
									<h1><em>{title} ({year})</em></h1>
									<h2>{artist}</h2>
									<h3>{genre}</h3>
								</div>
								<h1 style={ratingStyle}>{albumRating}/10</h1>
							</div>
						</div>
					</div>
					<AlbumRatings albumId={this.props.match.params.albumId}/>
				</div>
			)
		} else {
			return <h2>Loading...</h2>
		}
		
	}
}

const mapStateToProps = state => {
	return {
		albums: state.albums.albums,
	}
}

export default connect(mapStateToProps, { getSingleAlbum })(AlbumView);
