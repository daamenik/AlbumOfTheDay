import { GET_ALBUMS, DELETE_ALBUM, ADD_ALBUM } from '../actions/types.js';

const initialState = {
	albums: []
}

export default function(state=initialState, action) {
	switch(action.type) {
		case GET_ALBUMS:
			return {
				...state,
				albums: action.payload
			}
		case DELETE_ALBUM:
			return {
				...state,
				albums: state.albums.filter(album => album.id !== action.payload)
			}
		case ADD_ALBUM:
			return {
				...state,
				albums: [...state.albums, action.payload]
			}
		default:
			return state;
	}
}