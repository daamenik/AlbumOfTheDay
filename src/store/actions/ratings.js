import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';
import { endpoint } from '../../constants';

import { GET_ALBUM_RATINGS } from '../actions/actionTypes';

// Get album
export const getAlbumRatings = (albumId) => (dispatch, getState) => {
	axios.get(`${endpoint}/ratings/`, tokenConfig(getState))
		.then(res => {
			albumId = Number(albumId);
			console.log(albumId);
			console.log(res.data);

			dispatch({
				type: GET_ALBUM_RATINGS,
				ratings: res.data.filter(rating => rating.album === albumId)
			});
		}).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}