import React from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { LoadingOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as actions from '../store/actions/auth';

const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


class LoginForm extends React.Component {

    render() {
        const onFinish = (values) => {
            // console.log('Received values of form: ', values);
            this.props.onAuth(values.userName, values.password);
            this.props.history.push('/');
        };        

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }

        return (
            <div>
                {errorMessage}
                {
                    this.props.loading ?

                    <Spin indicator={loadingIcon} />

                    :

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="userName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <NavLink style={{ marginRight: '10px' }} to='/resetpassword/'>
                                Forgot Password
                            </NavLink>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            <span> or </span> 
                            <NavLink style={{ marginRight: '10px' }} to='/signup/'>
                                Signup
                            </NavLink>
                        </Form.Item>
                    </Form>
                }
                
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);


