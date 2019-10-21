import React from 'react';
import { Route } from 'react-router-dom';
import AlbumListView from './containers/AlbumListView';
import AlbumDetailView from './containers/AlbumDetailView';

const BaseRouter = () => (
	<div>
		<Route exact path="/" component={AlbumListView} />
		<Route exact path="/:albumId" component={AlbumDetailView} />
	</div>
);

export default BaseRouter;