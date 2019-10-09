import styles from './index.less';
import { Table, Button ,Divider, Card,Tabs, Row, Col} from 'antd';
import React, { Component } from 'react'
import { black } from 'ansi-colors';
const { TabPane } = Tabs;

class TableDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
       dataSource : [
        {
          key: '1',
          height: 1001,
          amount:1003,
          number: 32,
          type: '经营购车',
          time:'2019.10.09',
        },
        {
          key: '2',
          height: 1002,
          amount:1004,
          number: 33,
          type: '生产经营',
          time:'2019.10.10',
        },
      ],
      
       columns : [
        {
          title: '所在区块高度',
          dataIndex: 'height',
          key: 'height',
        },
        {
          title: '流水编号',
          dataIndex: 'number',
          key: 'number',
        },
        {
          title: '金额(元)',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
          title: '划账类型',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '申请时间',
          dataIndex: 'time',
          key: 'time',
        },
        {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          render: (text, item) => (
            <span>
              <a onClick={this.addFun.bind(this,item.number)}>详情</a>
            </span>
          ),
        },
      ]
    };
  }

  addFun = (value)=>{
    console.log(this,"add",value)
  }

  deleteFun = ()=>{
    console.log(this,"delete")
  }

  callback(key) {
    console.log(key);
  }

  render(){
    return (
      <div className={styles.box}>
    
            <Row  type="flex" justify="space-around" align="middle" style={{height:80,padding:10}} className={styles.row1}>
                <Col span={4} >
                    <div>
                      <div>
                        共管账户余额
                      </div>
                      <div style={{color:black,fontSize:20,fontWeight:"bold"}}>
                        100,000元
                      </div>
                    </div>
                </Col>
                <Divider type="vertical" style={{height:40}}></Divider>
              
                <Col span={4} >
                    <div>
                      <div>
                        共管账户可用于生产性经营余额
                      </div>
                      <div style={{color:black,fontSize:20,fontWeight:"bold"}}>
                        100,000元
                      </div>
                    </div>
                </Col>
                <Divider type="vertical" style={{height:40}}></Divider>
              
                <Col span={4} >
                   <div>
                      <div>
                        租金归集账户余额
                      </div>
                      <div style={{color:black,fontSize:20,fontWeight:"bold"}}>
                        100,000元
                      </div>
                    </div>
                </Col>
                <Divider type="vertical" style={{height:40}}></Divider>
                <Col span={4} >
                    <div>
                      <div>
                        租金归集账户可用于生产性经营余额
                      </div>
                      <div style={{color:black,fontSize:20,fontWeight:"bold"}}>
                        100,000元
                      </div>
                    </div>   
                </Col>
              </Row>
          <div>
            
          </div>
          <Tabs type="flex" justify="start" className={styles.tabs}>
            <TabPane tab="共管账户转账记录" key="1" type="flex" justify="start">
              <Table dataSource={this.state.dataSource} columns={this.state.columns}  />
            </TabPane>
            <TabPane tab="租金归集账户转账记录" key="2" type="flex" justify="start">
              <Table dataSource={this.state.dataSource} columns={this.state.columns}  />
            </TabPane>
          </Tabs>
      </div>
    )
  }
  }

  export default TableDemo; 