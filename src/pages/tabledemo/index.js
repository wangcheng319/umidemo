import styles from './index.css';
import { Table, Button ,Divider} from 'antd';
import React, { Component } from 'react'

class TableDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
       dataSource : [
        {
          key: '1',
          name: '胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号',
        },
        {
          key: '2',
          name: '胡彦祖',
          age: 42,
          address: '西湖区湖底公园1号',
        },
      ],
      
       columns : [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
        },
      ]
    };
  }

  addFun = ()=>{
    console.log(this,"add")
  }

  deleteFun = ()=>{
    console.log(this,"delete")
  }

  render(){
    return (
      <div className={styles.normal}>
          <Table dataSource={this.state.dataSource} columns={this.state.columns}  />
      </div>
    )
  }
  }

  export default TableDemo;