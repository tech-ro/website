import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import './Layout.css';
import { Link, withRouter } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal">

                        {
                            this.props.isAuthenticated ?

                                <Menu.Item key="1" onClick={this.props.logout}>
                                    Logout
                            </Menu.Item>

                                :

                                <Menu.Item key="1">
                                    <Link to="/login">Login</Link>
                                </Menu.Item>

                        }

                        <Menu.Item key="3">
                            <Link to="/">Blog</Link>
                        </Menu.Item>


                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to='/'>List</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
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
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
