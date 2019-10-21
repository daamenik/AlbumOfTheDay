import React, { Component } from 'react';
import axios from 'axios';

import { Card } from 'antd';

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

	render() {
		const { title, artist, genre, year } = this.state.album;

		return (
			<Card title={title}>
				<p>{artist}</p>
				<p>{genre}</p>
				<p>{year}</p>
			</Card>
		)
	}
}
