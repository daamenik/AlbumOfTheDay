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
			const { title, artist, genre, year, cover_url, average_rating } = this.props.albums[0];
			
			console.log(average_rating);

			let ratingColor = "";
			if (average_rating < 2.5) {
				ratingColor = "darkred";
			} else if (average_rating < 5) {
				ratingColor = "red";
			} else if (average_rating === 5) {
				ratingColor = "yellow";
			} else if (average_rating < 7.5) {
				ratingColor = "lightgreen";
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
								<img height="350" src={cover_url} alt="Album cover" />
								<p>Submitted by anonymous</p>
							</div>
							<div className="col">
								<div className="album-description">
									<u>10-22-19</u>
									<h1><em>{title} ({year})</em></h1>
									<h2>{artist}</h2>
									<h3>{genre}</h3>
								</div>
								<h1 style={ratingStyle}>{average_rating}/10</h1>
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
