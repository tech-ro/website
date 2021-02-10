import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';


const FormItem = Form.Item;
const userIcon = <UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
const mailIcon = <MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />
const lockIcon = <LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />


class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
    };

    render() {
        const onFinish = (values) => { 
            this.props.onAuth(
                values.userName,
                values.email,
                values.password,
                values.confirm
            );
            this.props.history.push('/');
            console.log('Received values of form: ', values);
        };

        return (
            <Form 
                name="register"
                onFinish={onFinish}
            >

                <FormItem
                    name="userName"
                    label="Username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        }
                    ]}
                >
                    <Input prefix={userIcon} placeholder="Username" />
                </FormItem>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input prefix={mailIcon} placeholder="Email" />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password prefix={lockIcon} type="password" placeholder="Password"/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password prefix={lockIcon} type="password" placeholder="Password" />
                </Form.Item>

                <FormItem>
                    <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
                        Signup
        </Button>
        Or
        <NavLink
                        style={{ marginRight: '10px' }}
                        to='/login/'> login
        </NavLink>
                </FormItem>

            </Form>
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
        onAuth: (username, email, password1, password2) => dispatch(actions.authSignup(username, email, password1, password2))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);