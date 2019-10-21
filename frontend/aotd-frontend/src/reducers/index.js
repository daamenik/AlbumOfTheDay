import { combineReducers } from 'redux';
import albums from './albums';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
	albums,
	errors,
	messages,
	auth
});