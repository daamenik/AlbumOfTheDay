import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';
import { endpoint } from '../../constants';

import { GET_ALBUM_RATINGS, ADD_RATING } from '../actions/actionTypes';

// Get album
export const getAlbumRatings = (albumId) => (dispatch, getState) => {
	axios.get(`${endpoint}/ratings/`, tokenConfig(getState))
		.then(res => {
			albumId = Number(albumId);

			// TODO: Get username from user id

			dispatch({
				type: GET_ALBUM_RATINGS,
				ratings: res.data.filter(rating => rating.album === albumId)
			});
		}).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// Add rating to album
export const addRating = (rating) => (dispatch) => {
	axios.post(`${endpoint}/ratings/`, rating)
		.then(res => {
			dispatch({
				type: ADD_RATING,
				rating: res.data
			});
		}).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}