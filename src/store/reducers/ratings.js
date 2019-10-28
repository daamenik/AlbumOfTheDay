import { GET_ALBUM_RATINGS, ADD_RATING } from '../actions/actionTypes';

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
		case ADD_RATING:
			return {
				...state,
				ratings: [state.ratings, action.rating]
			}
		default:
			return state;
	}
}