import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleAlbum } from '../../store/actions/albums';
import PropTypes from 'prop-types';
import '../../App.css';

export class AlbumView extends Component {
	static propTypes = {
		album: PropTypes.object.isRequired,
		getSingleAlbum: PropTypes.func.isRequired
	}

	componentDidMount() {
		const { albumId } = this.props.match.params;
		this.props.getSingleAlbum(albumId);
	}

	render() {
		const {album} = this.props;

		if(album) {
			return (
				<div className="container">
					<div className="row center">
						<div className="col">
							<img height="350" src={album["coverUrl"]} alt="Album cover" />
						</div>
						<div className="col">
							<h1><em>{album["title"]} ({album["year"]})</em></h1>
							<h2>{album["artist"]}</h2>
							<h3>{album["genre"]}</h3>
						</div>
					</div>
				</div>
			)
		} else {
			return <h2>Loading...</h2>
		}
		
	}
}

const mapStateToProps = state => {
	return {
		album: state.albums.albums[0]
	}
}

export default connect(mapStateToProps, { getSingleAlbum })(AlbumView);
