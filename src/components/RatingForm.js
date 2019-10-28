import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addRating } from '../store/actions/ratings';

export class RatingForm extends Component {
	state = {
		rating: '',
		favorite_song: '',
		additional_thoughts: ''
	}

	static PropTypes = {
		
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = (e) => {
		// TODO: Add album to state with redux!
		// e.preventDefault();
		const { albumId } = this.props.match.params;
		const { rating, favorite_song, additional_thoughts } = this.state;
		// const album = { title, artist, genre, year };
		// this.props.addAlbum(album);

		// axios.defaults.headers = {
		// 	"Content-Type": "application/json",
		// 	Authorization: `Token ${this.props.token}`
		// }
		
		this.props.addRating({
			rating,
			albumId,
			favorite_song,
			additional_thoughts
		})

		this.setState({ 
			rating: '',
			favorite_song: '',
			additional_thoughts: ''
		})
	}

	render() {
		const { title, artist, genre, year } = this.state;
		return (
			<div className="card card-body mt-4 mb-4">
				<form onSubmit={(e) => this.onSubmit(
					e,
					this.props.requestType,
					this.props.albumId
				)}>
					<div className="form-group">
						<label>Title</label>
						<input
							className="form-control"
							type="text"
							name="title"
							onChange={this.onChange}
							value={title}
						/>
					</div>
					<div className="form-group">
						<label>Artist</label>
						<input
							className="form-control"
							type="text"
							name="artist"
							onChange={this.onChange}
							value={artist}
						/>
					</div>
					<div className="form-group">
						<label>Genre</label>
						<input
							className="form-control"
							type="text"
							name="genre"
							onChange={this.onChange}
							value={genre}
						/>
					</div>
					<div className="form-group">
						<label>Year</label>
						<input
							className="form-control"
							type="number"
							name="year"
							onChange={this.onChange}
							value={year}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">
							{this.props.requestType === "post" ? "Create" : "Update"}
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default connect(null, { addRating })(RatingForm);
