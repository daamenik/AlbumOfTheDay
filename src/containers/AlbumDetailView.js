import React, { Component } from 'react';
import axios from 'axios';

import { Card, Button } from 'antd';

import CustomForm from '../components/Form';
import { connect } from 'react-redux';

class AlbumDetailView extends Component {
	state = {
		album: {}
	}

	componentDidUpdate(oldProps) {
		if (oldProps.token !== this.props.token) {
			const albumId = this.props.match.params.albumId;

			axios.defaults.headers = {
				"Content-Type": "application/json",
				Authorization: `Token ${this.props.token}`
			}

			axios.get(`http://localhost:8000/api/albums/${albumId}/`)
				.then(res => {
					this.setState({
						album: res.data
					});
				})
		}
	}

	handleDelete = (e) => {
		if (this.props.token) {
			const albumId = this.props.match.params.albumId;
			axios.delete(`http://localhost:8000/api/albums/${albumId}/`);

			axios.defaults.headers = {
				"Content-Type": "application/json",
				Authorization: `Token ${this.props.token}`
			}
			
			// TODO: Update this using Redux
			this.props.history.push("/");
			this.forceUpdate();
		} else {
			// TODO: show some kind of message
			// Alternatively: just don't show the button if the user isn't authenticated
		}
		
	}

	render() {
		const { title, artist, genre, year } = this.state.album;

		return (
			<div>
				<Card title={title}>
					<p>{artist}</p>
					<p>{genre}</p>
					<p>{year}</p>
				</Card>
				<CustomForm 
					requestType="put"
					albumId={this.props.match.params.albumId}
				/>
				<form>
					<Button onSubmit={this.handleDelete} type="danger" htmlType="submit">Delete</Button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		token: state.auth.token
	}
}

export default connect(mapStateToProps)(AlbumDetailView);
