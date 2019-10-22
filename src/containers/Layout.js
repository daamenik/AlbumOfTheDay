import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../store/actions/auth';

const { Header, Content, Footer } = Layout;

export class CustomLayout extends Component {
	static propTypes = {
		isAuthenticated: PropTypes.bool.isRequired
	}

	render() {
		return (
			<Layout className="layout">
				<Header>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['2']}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="1">
						<Link to="/">Posts</Link>
					</Menu.Item>
					
					{
						this.props.isAuthenticated ?
	
						<Menu.Item key="2" onClick={this.props.logout}>
							Logout
						</Menu.Item>
	
						:
	
						<Menu.Item key="2">
							<Link to="/login">Login</Link>
						</Menu.Item>
					}
				</Menu>
				</Header>
				<Content style={{ padding: '0 50px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>
						<Link to="/">
							Home
						</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>
						<Link to="/">
							List
						</Link>
					</Breadcrumb.Item>
				</Breadcrumb>
				<div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
					{this.props.children}
				</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			</Layout>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(logout())
	}
}

// TODO: withRouter(connect(...)) ???
export default connect(null, mapDispatchToProps)(CustomLayout);  