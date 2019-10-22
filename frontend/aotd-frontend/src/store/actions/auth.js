import axios from 'axios';
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './actionTypes';
import { returnErrors } from './messages';

export const authStart = () => {
	return {
		type: AUTH_START
	}
}

export const authSuccess = (token) => {
	return {
		type: AUTH_SUCCESS,
		token
	}
}

export const authFail = (error) => {
	return {
		type: AUTH_FAIL,
		error
	}
}

export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('expirationDate');
	return {
		type: AUTH_LOGOUT
	}
}

export const checkAuthTimeout = expirationTime => {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout());
		}, expirationTime * 1000)
	}
}

export const login = (username, password) => {
	return dispatch => {
		dispatch(authStart());
		axios.post('http://localhost:8000/rest-auth/login/', {
			username,
			password
		})
			.then(res => {
				const token = res.data.key;
				const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
				localStorage.setItem('token', token);
				localStorage.setItem('expirationDate', expirationDate);
				dispatch(authSuccess(token));
				dispatch(checkAuthTimeout(3600));
			})
			.catch(err => {
				dispatch(returnErrors(err.response.data, err.response.status));
				dispatch(authFail(err));
			});
	}
}

export const register = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username,
            email,
            password1,
            password2
        })
        .then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600));
        })
        .catch(err => {
			dispatch(returnErrors(err.response.data, err.response.status));
            dispatch(authFail(err));
        })
    }
}

export const authCheckState = () => {
	return dispatch => {
		const token = localStorage.getItem('token');

		// checking if token is there / user logged in
		if (token === undefined) {
			dispatch(logout());
		} else {
			// ensuring the token hasn't expired
			const expirationDate = new Date(localStorage.getItem('expirationDate'));
			if (expirationDate <= new Date()) {
				dispatch(logout());
			} else {
				dispatch(authSuccess(token));
				dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000 ));
			}
		}
	}
}