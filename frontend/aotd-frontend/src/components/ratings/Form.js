import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAlbum } from '../../actions/albums';


export class Form extends Component {
	state = {
		title: '',
		artist: '',
		genre: '',
		year: ''
	}

	static propTypes = {
		addAlbum: PropTypes.func.isRequired
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	onSubmit = e => {
		e.preventDefault();
		const { title, artist, genre, year } = this.state;
		const album = { title, artist, genre, year };
		this.props.addAlbum(album);
		this.setState({ 
			title: '',
			artist: '',
			genre: '',
			year: ''
		})
	}

	render() {
		const { title, artist, genre, year } = this.state;
		return (
			<div className="card card-body mt-4 mb-4">
				<h2>Add Album</h2>
				<form onSubmit={this.onSubmit}>
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
							Submit
						</button>
					</div>
				</form>
			</div>
		)
	}
}

export default connect(null, { addAlbum })(Form);
