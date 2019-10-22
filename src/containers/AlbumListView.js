import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAlbums, deleteAlbum } from '../store/actions/albums';

import Albums from '../components/Albums';
import CustomForm from '../components/Form';

class AlbumListView extends Component {
	static propTypes = {
		albums: PropTypes.array.isRequired,
		getAlbums: PropTypes.func.isRequired,
		deleteAlbum: PropTypes.func.isRequired
	}

	componentDidUpdate(oldProps) {
		if (oldProps.token !== this.props.token) {
			this.props.getAlbums();
		}
	}

	render() {
		return (
			<div>
				<Albums data={this.props.albums} />
				<h2>Create Album</h2>
				<CustomForm
					requestType="post"
					albumId={null} 
				/>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		token: state.auth.token,
		albums: state.albums.albums
	}
}

export default connect(mapStateToProps, { getAlbums, deleteAlbum })(AlbumListView);