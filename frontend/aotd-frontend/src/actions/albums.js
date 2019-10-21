import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { GET_ALBUMS, DELETE_ALBUM, ADD_ALBUM } from './types';

// Get album
export const getAlbums = () => (dispatch, getState) => {
	axios.get('http://localhost:8000/api/albums/', tokenConfig(getState))
		.then(res => {
			dispatch({
				type: GET_ALBUMS,
				payload: res.data
			});
		}).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Delete album
export const deleteAlbum = (id) => (dispatch, getState) => {
	axios.delete(`http://localhost:8000/api/albums/${id}/`, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: DELETE_ALBUM,
				payload: id
			});

			dispatch(createMessage({ albumDeleted: "Album deleted." }));
		}).catch(err => console.log(err));
}

// Add lead
export const addAlbum = (album) => (dispatch, getState) => {
	axios.post(`http://localhost:8000/api/albums/`, album, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: ADD_ALBUM,
				payload: res.data
			});

			dispatch(createMessage({ albumAdded: "Album added." }));
		}).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}