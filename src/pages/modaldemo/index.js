import React from "react";
import { connect } from 'dva'
import { Card ,Row,Col, Form, Input,Button,Icon,Modal} from 'antd';
import styles from './index.less'
import Index from "./components/index";

class Ui extends React.PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            visible:true
        }
    }

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
        return(
            <div>
                <div>
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                </div>
                <Modal
                    width='600px'
                    title="共管账户申请划账"
                    visible={true}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}>
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
                  </Form>
                </Modal>

                <Modal
                    width='600px'
                    title="共管账户申请划账"
                    visible={false}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}>
                        <Index onSubmit={this.handleSubmit}/>
                </Modal>
            </div>
        )
    }
}
const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(Ui);
export default connect(({ s_modal }) => ({ state: s_modal }))(WrappedHorizontalLoginForm)