import React, { Component } from 'react';
import axios from 'axios';

import { Card, Button } from 'antd';

import CustomForm from '../components/Form';

export default class AlbumDetailView extends Component {
	state = {
		album: {}
	}

	componentDidMount() {
		const albumId = this.props.match.params.albumId;

		axios.get(`http://localhost:8000/api/albums/${albumId}`)
			.then(res => {
				this.setState({
					album: res.data
				});
			})
	}

	handleDelete = (e) => {
		const albumId = this.props.match.params.albumId;
		axios.delete(`http://localhost:8000/api/albums/${albumId}`);
		
		// TODO: Update this using Redux
		this.props.history.push("/");
		this.forceUpdate();
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
