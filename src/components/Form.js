import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class CustomForm extends React.Component {
	state = {
		title: '',
		artist: '',
		genre: '',
		year: ''
	}

	onChange = e => this.setState({ [e.target.name]: e.target.value });

	// requestType will be post or put
	onSubmit = (e, requestType, albumId) => {
		// TODO: Add album to state with redux!
		// e.preventDefault();
		const { title, artist, genre, year } = this.state;
		// const album = { title, artist, genre, year };
		// this.props.addAlbum(album);

		axios.defaults.headers = {
			"Content-Type": "application/json",
			Authorization: `Token ${this.props.token}`
		}
		
		switch(requestType) {
			case 'post':
				axios.post("http://localhost:8000/api/albums/", {
					title,
					artist,
					genre,
					year
				})
					.then(res => console.log(res))
					.catch(err => console.error(err));
				break;
			case 'put':
				axios.put(`http://localhost:8000/api/albums/${albumId}/`, {
					title,
					artist,
					genre,
					year
				})
					.then(res => console.log(res))
					.catch(err => console.error(err));
				break;
			default:
				break;
		}

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
		);
	}
}

const mapStateToProps = state => {
	return {
		token: state.auth.token
	}
}

export default connect(mapStateToProps)(CustomForm);