import React, { Component } from 'react'
import { Card ,Row,Col, Form, Input,Button,Icon} from 'antd';
import styles from './index.css';

export class Login extends Component {
    render() {
        return (
            <div className={styles.root}>
               <WrappedHorizontalLoginForm />
            </div>
        )
    }
}

class index extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
           <Form onSubmit={this.handleSubmit}>
                      <Form.Item>
                        {getFieldDecorator('username', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                          />,
                        )}
                      </Form.Item>
                      <Form.Item>
                        {getFieldDecorator('password', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                          />,
                        )}
                      </Form.Item>
                      <Button htmlType="submit">Login in</Button>
                  </Form>
      </div>
    )
  }
}
const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(index);

export default Login
