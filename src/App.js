/*eslint-disable*/
import React, { Component } from 'react';

import './App.css';
import { Card } from 'antd';
import MyCard from "./MyCard";
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import { Layout, Menu, Icon, Badge } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
    <div>

    <Layout >
      <Sider breakpoint="md" collapsedWidth="0" style={{ background: '#fff' }}>
      
    <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} style={{marginTop: '64px'}}>
      <Menu.Item key="1" disabled>
        <Icon type="user" />
        <span className="nav-text">My Account</span>
      </Menu.Item>
      <Menu.Item key="2" disabled>
        <Icon type="to-top" />
        <span className="nav-text">Upload Item</span>
      </Menu.Item>
    </Menu>
      
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', lineHeight: '64px' }}>
        
        
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['4']} style={{float: 'right'}}>
      <Menu.Item key="1" disabled>
        <Icon type="shopping-cart" />
        <Badge count={'0 items'}/>
        <span className="nav-text">Cart</span>

      </Menu.Item>
    </Menu>
        
        </Header>
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