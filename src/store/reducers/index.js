import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import messages from './messages';
import albums from './albums';
import ratings from './ratings';

export default combineReducers({
	auth,
	errors,
	messages,
	albums,
	ratings
});