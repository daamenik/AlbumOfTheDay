import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../store/actions/auth';
import { createMessage } from '../store/actions/messages';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export class Register extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		password2: ''
	};

	static propTypes = {
		register: PropTypes.func.isRequired,
		isAuthenticated: PropTypes.bool,
		loading: PropTypes.bool.isRequired,
		error: PropTypes.object
	};

	onSubmit = e => {
		e.preventDefault();
		const { username, email, password, password2 } = this.state;

		if (password !== password2) {
			// console.error("Passwords don't match");
			this.props.createMessage({ passwordsDontMatch: "Passwords don't match "});
		} else {
			this.props.register(username, email, password, password2);
		}
	}

	onChange = e => {
		this.setState({ 
			[e.target.name]: e.target.value
		});
	}

	

	render() {
		const { username, email, password, password2 } = this.state;

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
						<h2 className="text-center">Register</h2>
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
								<label>Email</label>
								<input
									className="form-control"
									type="email"
									name="email"
									onChange={this.onChange}
									value={email}
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
								<label>Confirm Password</label>
								<input
									className="form-control"
									type="password"
									name="password2"
									onChange={this.onChange}
									value={password2}
								/>
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary">
									Register
								</button>
							</div>
							<p>
								Already have an account? <Link to="/login">Login</Link>
							</p>
						</form>
					</div>
				}

			</div>
		)
	}
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.token !== null,
	loading: state.auth.loading,
	error: state.auth.error
});

const mapDispatchToProps = dispatch => {
	return {
		register: (username, email, password, password2) => dispatch(register(username, email, password, password2)),
		createMessage: msg => dispatch(createMessage(msg))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
