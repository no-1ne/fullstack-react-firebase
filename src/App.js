/*eslint-disable*/
import React, { Component } from 'react';

import './App.css';
import { Card } from 'antd';
import MyCard from "./MyCard";
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
    <div>
        
    <Layout>
      <Sider breakpoint="md" collapsedWidth="0">Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content style={{margin: '26px'}}>
            <Row>
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
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
        
        
        
     </div>
    );
  }
}

export default App;