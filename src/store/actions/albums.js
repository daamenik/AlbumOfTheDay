import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';
import { endpoint } from '../../constants';

import { GET_ALBUMS, DELETE_ALBUM, ADD_ALBUM } from './actionTypes';
import SpotifyWebApi from 'spotify-web-api-js';

var Spotify = require('spotify-web-api-js');
var s = new Spotify();
var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('a4b39ef0d58d4f89bddba349840ea5db');

// Get album
export const getAlbums = () => (dispatch, getState) => {
	// debugger;
	axios.get(`${endpoint}/albums/`, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: GET_ALBUMS,
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
	const { title } = album;

	// spotifyApi.searchAlbums(title)
	// 	.then(data => {
	// 		console.log(data);
	// 	})

	axios.post(`${endpoint}/albums/`, album, tokenConfig(getState))
		.then(res => {
			dispatch({
				type: ADD_ALBUM,
				payload: res.data
			});

			dispatch(createMessage({ albumAdded: "Album added." }));
		}).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}