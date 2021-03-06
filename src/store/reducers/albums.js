import { GET_ALBUMS, DELETE_ALBUM, ADD_ALBUM, GET_SINGLE_ALBUM, GET_LATEST_ALBUMS, GET_TOP_ALBUMS } from '../actions/actionTypes';

const initialState = {
	albums: [],
	mostRecent: [],
	topRated: []
}

export default function(state=initialState, action) {
	switch(action.type) {
		case GET_ALBUMS:
			return {
				...state,
				albums: action.payload
			}
		case GET_SINGLE_ALBUM:
			return {
				...state,
				albums: [action.payload]
			}
		case GET_LATEST_ALBUMS:
			return {
				...state,
				mostRecent: action.payload
			}
		case GET_TOP_ALBUMS:
			return {
				...state,
				topRated: action.payload
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