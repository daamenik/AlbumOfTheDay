import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from '../actions/actionTypes'

const initialState = {
	token: null,
	error: null,
	loading: false
};

export default function(state=initialState, action) {
	switch(action.type) {
		case AUTH_START:
			return {
				...state,
				error: null,
				loading: true
			}
		case AUTH_SUCCESS:
			return {
				...state,
				token: action.token,
				error: null,
				loading: false
			}
		case AUTH_FAIL:
			return {
				...state,
				error: action.error,
				loading: false
			}
		case AUTH_LOGOUT:
			return {
				...state,
				token: null
			}
		default:
			return state;
	}
};