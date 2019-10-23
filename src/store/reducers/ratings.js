import { GET_ALBUM_RATINGS } from '../actions/actionTypes';

const initialState = {
	ratings: []
}

export default function(state=initialState, action) {
	switch(action.type) {
		case GET_ALBUM_RATINGS:
			return {
				...state,
				ratings: action.ratings
			}
		default:
			return state;
	}
}