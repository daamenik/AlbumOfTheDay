import React, { Component } from 'react';
import axios from 'axios';

import Albums from '../components/Albums';

export default class AlbumListView extends Component {
	state = {
		albums: []
	}

	componentDidMount() {
		axios.get("http://localhost:8000/api/albums")
			.then(res => {
				this.setState({
					albums: res.data
				});
			})
	}

	render() {
		return (
			<Albums data={this.state.albums} />
		)
	}
}
