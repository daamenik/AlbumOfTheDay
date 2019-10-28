import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAlbums } from '../store/actions/albums'

export class RatingList extends Component {
	static propTypes = {
		albums: PropTypes.array.isRequired,
		getAlbums: PropTypes.func.isRequired
	}

	componentDidMount() {
		this.props.getAlbums();
	}

	render() {
		if (this.props.albums) {
			var albumList = this.props.albums.map(album => (
				<tr>
					<td>{album.date_submitted}</td>
					<td><a href={`/albums/${album.id}/`}>{album.title}</a></td>
				</tr>
			));

			return (
				<div>
					{albumList}
				</div>
			)
		} else {
			return (
				<h1>Nothing to see here.</h1>
			)
		}
	}
}

const mapStateToProps = state => {
	return {
		albums: state.albums.albums,
	}
}

export default connect(mapStateToProps, { getAlbums })(RatingList);

