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
			var ratingCards = this.props.ratings.map(({ id, rating, favorite_song, additional_thoughts }) => (
				<div className="rating" key={id}>
					<p>Cole McReynolds</p>
					<div className="card" id="rating-info">
						<div className="row card-body">
							<div className="col-1 text-center">
								{rating}
							</div>
							<div className="col-11">
								<p>Favorite Song: {favorite_song}</p>
								<p>Additional Thoughts: {additional_thoughts}</p>
							</div>
						</div>
					</div>
				</div>
			));

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
