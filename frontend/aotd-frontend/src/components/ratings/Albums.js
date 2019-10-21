import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAlbums, deleteAlbum } from '../../actions/albums';

export class Albums extends Component {
	static propTypes = {
		albums: PropTypes.array.isRequired,
		getAlbums: PropTypes.func.isRequired,
		deleteAlbum: PropTypes.func.isRequired
	}

	componentDidMount() {
		this.props.getAlbums();
	}

	render() {
		return (
			<Fragment>
				<h2>Albums</h2>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Title</th>
							<th>Artist</th>
							<th>Genre</th>
							<th>Year</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{ this.props.albums.map(album => (
							<tr key={album.id}>
								<td>{album.title}</td>
								<td>{album.artist}</td>
								<td>{album.genre}</td>
								<td>{album.year}</td>
								<td><button onClick={this.props.deleteAlbum.bind(this, album.id)} className="btn btn-danger btn-sm">Delete</button></td>
							</tr>
						))}
					</tbody>
				</table>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
	albums: state.albums.albums // the first "albums" refers to the reducer
})

export default connect(mapStateToProps, { getAlbums, deleteAlbum })(Albums);
