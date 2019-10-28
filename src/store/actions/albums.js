import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';
import { endpoint } from '../../constants';

import { GET_ALBUMS, DELETE_ALBUM, ADD_ALBUM, GET_SINGLE_ALBUM, GET_LATEST_ALBUMS, GET_TOP_ALBUMS } from './actionTypes';

// Get album
export const getAlbums = () => (dispatch, getState) => {
	axios.get(`${endpoint}/albums/`, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: GET_ALBUMS,
				payload: res.data
			});
		}).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Get info for one album
export const getSingleAlbum = (id) => (dispatch, getState) => {
	axios.get(`${endpoint}/albums/${id}/`, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: GET_SINGLE_ALBUM,
				payload: res.data
			});
		}).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Get the six most recent albums (first one is the current album, along with the next five most recent)
// For the home page display
export const getLatestAlbums = () => (dispatch) => {
	axios.get(`${endpoint}/albums/latest/`)
		.then(res => {
			dispatch({
				type: GET_LATEST_ALBUMS,
				payload: res.data
			});
		}).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Get the five top-rated albums
export const getTopAlbums = () => (dispatch) => {
	axios.get(`${endpoint}/albums/top/`)
		.then(res => {
			dispatch({
				type: GET_TOP_ALBUMS,
				payload: res.data
			});
		}).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Delete album
export const deleteAlbum = (id) => (dispatch, getState) => {
	axios.delete(`${endpoint}/albums/${id}/`, tokenConfig(getState))
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
	axios.post(`${endpoint}/albums/`, album, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: ADD_ALBUM,
				payload: res.data
			});

			dispatch(createMessage({ albumAdded: "Album added." }));
		}).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}