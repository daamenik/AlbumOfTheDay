import React from 'react';
import { Route } from 'react-router-dom';
import AlbumListView from './containers/AlbumListView';
import AlbumDetailView from './containers/AlbumDetailView';
import Login from './containers/Login';
import Register from './containers/Register.js';

const BaseRouter = () => (
	<div>
		<Route exact path="/" component={AlbumListView} />
		<Route exact path="/albums/:albumId" component={AlbumDetailView} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/register" component={Register} />
	</div>
);

export default BaseRouter;