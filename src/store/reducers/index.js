import { combineReducers } from 'redux';
import auth from './auth';
import errors from './errors';
import messages from './messages';
import albums from './albums';

export default combineReducers({
	auth,
	errors,
	messages,
	albums
});