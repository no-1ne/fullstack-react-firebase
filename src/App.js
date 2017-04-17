/*eslint-disable*/
import React, { Component } from 'react';

import './App.css';
import { Card } from 'antd';
import MyCard from "./MyCard";
import "antd/dist/antd.css";
import { Row, Col } from 'antd';

class App extends Component {
  render() {
    return (
    <div>
        <Row gutter={16}>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <MyCard/>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <MyCard/>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <MyCard/>
            </Col>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <MyCard/>
            </Col>
        </Row>
     </div>
    );
  }
}

export default App;
