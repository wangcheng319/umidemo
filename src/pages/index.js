import styles from './index.css';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import router from 'umi/router';
import { Component } from 'react';

class Index extends Component {

  toTable = () => {
    router.push('/tabledemo')
    console.log(this)
  }

  render(){
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">
              Getting Started 
            </a>
          </li>
        </ul>
        <Button onClick={this.toTable}>Table</Button>
      </div>
    )
  }
}
export default Index;
