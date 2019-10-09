import React, { Component } from 'react'
import { Card ,Row,Col} from 'antd';
import styles from './index.css';

export class Login extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Card className={styles.box} bordered="true">
                <Row gutter={16} type="flex" justify="space-around" align="middle" >
                <Col span={4} >
                   1
                </Col>
              
              
                <Col span={4} >
                   2
                </Col>
               
              
                <Col span={4} >
                  3
                </Col>
               
                <Col span={4} >
                   4
                </Col>
              </Row>
                </Card>
            </div>
        )
    }
}

export default Login
