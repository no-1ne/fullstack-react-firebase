/*eslint-disable*/
import React, { Component } from 'react';

import './App.css';

import MyCard from "./MyCard";

import { Row, Col,Layout, Menu, Icon } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


let items = [{
  title: "A new Pen",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/03-BICcristal2008-03-26.jpg/220px-03-BICcristal2008-03-26.jpg",
  price: 10,
  description: "A very nice plasticy pen",
  discount: 5
},
{
  title: "A tasty thali",
  image: "https://thumbs.dreamstime.com/z/indian-thali-26440151.jpg",
  price: 100,
  description: "A very nice healthy thali",
  discount: 10
},
{
  title: "A non vegeratian  thali",
  image: "https://thumbs.dreamstime.com/z/indian-thali-26440151.jpg",
  price: 150,
  description: "A very nice tasty  thali",
  discount: 10
}
]



class App extends Component {
  render() {
    return (
    <div>

    <Layout >
      <Sider breakpoint="md" collapsedWidth="0" style={{ background: '#fff' }}>
      
    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} style={{marginTop: '64px'}}>
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
        
        
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{float: 'right'}}>
      <Menu.Item key="1" disabled>
        <Icon type="shopping-cart" />
        <span className="nav-text">Cart</span>

      </Menu.Item>
    </Menu>
        </Header>
        <Content style={{margin: '26px'}}>
            <Row>
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <MyCard passedItem={items[0]} />
            </Col>
            
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <MyCard passedItem={items[1]} />
            </Col>
            
            <Col xs={24} sm={12} md={8} lg={6} xl={6}>
                <MyCard passedItem={items[2]} />
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