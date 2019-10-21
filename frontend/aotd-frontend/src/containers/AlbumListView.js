import React, { Component } from 'react';
import axios from 'axios';

import Albums from '../components/Albums';
import CustomForm from '../components/Form';

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
			<div>
				<Albums data={this.state.albums} />
				<h2>Create Album</h2>
				<CustomForm
					requestType="post"
					albumId={null} 
				/>
			</div>
		)
	}
}
