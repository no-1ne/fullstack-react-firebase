/*eslint-disable*/
import React, { Component } from 'react';

import './App.css';

import MyCard from "./MyCard";

import { Row, Col,Layout, Menu, Icon, Card } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import * as firebase from 'firebase';




class App extends Component {
    
  constructor(props) {
      super(props);
      this.state = {
          allItems : []
      }
  }
    
  componentDidMount() {
      console.log("in Componenet Mount at " + Date());
      this.databaseRef = firebase.database().ref('items');
      this.databaseRef.on('value', (dataSnap) => {
          console.log(dataSnap.val());
          console.log(Date());
          this.setState({allItems:dataSnap.val() });
      })
  }  
  
  componentWillUnmount() {
      this.databaseRef.off();
  }
    
  
    
  render() {
    console.log("in render " + Date());
    let allItemsDisplayed = [];
    
    if(this.state.allItems.length == 0) {
       allItemsDisplayed = 
       <Card loading title="Card title" style={{ width: '34%' }}>
        Whatever content
        </Card> ;
    } else {
    allItemsDisplayed = this.state.allItems.map((item) => {
            return <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                <MyCard passedItem={item} />
            </Col>;
    });
    }

                   
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
             {allItemsDisplayed}
            
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