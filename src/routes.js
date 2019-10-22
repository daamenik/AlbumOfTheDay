import React from 'react';
import { Route } from 'react-router-dom';
import AlbumListView from './containers/AlbumListView';
import AlbumDetailView from './containers/AlbumDetailView';
import AlbumView from './components/pages/AlbumView';
import Login from './containers/Login';
import Register from './containers/Register';
import Home from './components/pages/Home';

const BaseRouter = () => (
	<div>
		<Route exact path="/" component={Home} />
		<Route exact path="/albums" component={AlbumListView} />
		<Route exact path="/albums/:albumId" component={AlbumView} />
		<Route exact path="/login" component={Login} />
		<Route exact path="/register" component={Register} />
	</div>
);

export default BaseRouter;