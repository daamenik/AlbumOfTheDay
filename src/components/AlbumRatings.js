import React, { Component } from 'react';
import { getAlbumRatings } from '../store/actions/ratings';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class AlbumRatings extends Component {
	static propTypes = {
		ratings: PropTypes.array.isRequired,
		getAlbumRatings: PropTypes.func.isRequired
	}

	componentDidMount() {
		const { albumId } = this.props;
		this.props.getAlbumRatings(albumId);
	}

	render() {
		if (this.props.ratings.length > 0) {

			var ratingCards = this.props.ratings.map(({ id, rating, favorite_song, additional_thoughts, submitter }) => {
				let ratingColor = ""
				if (rating < 2.5) {
					ratingColor = "red";
				} else if (rating < 5) {
					ratingColor = "lightpink";
				} else if (rating == 5) {
					ratingColor = "lightgoldenrodyellow";
				} else if (rating < 7.5) {
					ratingColor = "lightgreen";
				} else {
					ratingColor = "rgb(37, 185, 11)";
				}

				let cardStyle = {
					backgroundColor: ratingColor
				}

				return (
					<div className="rating" key={id}>
						<p>{submitter}</p>
						<div className="card" style={cardStyle} id="rating-info">
							<div className="row card-body">
								<div className="col-1 text-center">
									{rating}
								</div>
								<div className="col-11">
									{favorite_song ? <p>Favorite Song: {favorite_song}</p> : null}
									{additional_thoughts ? <p>Additional Thoughts: {additional_thoughts}</p> : null}
								</div>
							</div>
						</div>
					</div>
				);
			});

			return (
				<div>
					{ratingCards}
				</div>
			);
		} else {
			return <h1>Loading ratings...</h1>
		}
	}
}

const mapStateToProps = state => {
	return {
		ratings: state.ratings.ratings
	}
}

export default connect(mapStateToProps, { getAlbumRatings })(AlbumRatings);
