import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseRouter from './routes';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { authCheckState } from './store/actions/auth';

// import CustomLayout from './containers/Layout';
import Header from './components/layout/Header';
// import Dashboard from './components/ratings/Dashboard';
// import Alerts from './components/layout/Alerts';
// import Login from './components/accounts/Login';
// import Register from './components/accounts/Register';
// import PrivateRoute from './components/common/PrivateRoute';

// import { Provider } from 'react-redux';
// import { Provider as AlertProvider } from 'react-alert';
// import AlertTemplate from 'react-alert-template-basic';
// import store from './store';
// import { loadUser } from './actions/auth';

// Alert options
// const alertOptions = {
// 	timeout: 3000,
// 	position: 'top center'
// };

class App extends Component {
	componentDidMount() {
		this.props.onTryAutoRegister();
	}

	render() {
		return (
			<div>
				<Router>
					<Header />
					{/* <CustomLayout {...this.props}> */}
						<BaseRouter />
					{/* </CustomLayout> */}
				</Router>

			</div>


			// <Provider store={store}>
			// 	<AlertProvider template={AlertTemplate} {...alertOptions}>
			// 		<Router>
			// 			<Fragment>
			// 				<Header />
			// 				<Alerts />
			// 				<div className="container">
			// 					<Switch>
			// 						{/* <PrivateRoute exact path="/" component={Dashboard} /> */}
			// 						{/* <Route exact path="/" component={Dashboard} />
			// 						<Route exact path="/register" component={Register} />
			// 						<Route exact path="/login" component={Login} /> */}
			// 					</Switch>
			// 				</div>
			// 			</Fragment>
			// 		</Router>
			// 	</AlertProvider>
			// </Provider>
		)
	}
}

// ReactDOM.render(<App />, document.getElementById('app'));

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoRegister: () => dispatch(authCheckState())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);