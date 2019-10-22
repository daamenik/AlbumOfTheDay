import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../store/actions/auth';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export class Login extends Component {
	state = {
		username: '',
		password: '',
	};

	static propTypes = {
		login: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool.isRequired,
		loading: PropTypes.bool.isRequired,
		error: PropTypes.object
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.login(this.state.username, this.state.password);
	};

	onChange = e => {
		this.setState({ 
			[e.target.name]: e.target.value
		});
	};

	render() {
		const { username, password } = this.state;
		if (this.props.isAuthenticated) {
			return <Redirect to="/" />;
		}

		let errorMessage = null;
		if (this.props.error) {
			errorMessage = (
				<p>{this.props.error.message}</p>
			);
		}

		return (
			<div className="col-md-6 m-auto">
				{errorMessage}
				{
					this.props.loading ?

					<Spin indicator={antIcon} />

					:

					<div className="card card-body mt-5">
						<h2 className="text-center">Login</h2>
						<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<label>Username</label>
								<input
									className="form-control"
									type="text"
									name="username"
									onChange={this.onChange}
									value={username}
								/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input
									className="form-control"
									type="password"
									name="password"
									onChange={this.onChange}
									value={password}
								/>
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary">
									Login
								</button>
							</div>
							<p>
								Don't have an account? <Link to="/register">Register</Link>
							</p>
						</form>
					</div>
				}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null,
		loading: state.auth.loading,
		error: state.auth.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		login: (username, password) => dispatch(login(username, password))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
