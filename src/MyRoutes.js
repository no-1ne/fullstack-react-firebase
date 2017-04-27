/*eslint-disable*/
import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { Layout, Menu, Icon} from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import App from './App.js';
import NewItem from './NewItem.js';

class MyRoutes extends Component {

 render() {
    return (<BrowserRouter>
        <div>
        
            <Layout >
      <Sider breakpoint="md" collapsedWidth="0" style={{ background: '#fff' }}>
      
    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} style={{marginTop: '64px'}}>
      <Menu.Item key="1" disabled>
        <Icon type="user" />
        <span className="nav-text">My Account</span>
      </Menu.Item>
      
    </Menu>
      
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', lineHeight: '64px' }}>
        
        
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{float: 'right'}}>
     
      <Menu.Item key="1">
        <Icon type="to-top" />
        <span className="nav-text">
         <Link to='/new-item'>   Upload Item </Link>
         </span>
      </Menu.Item>
     <Menu.Item key="2" disabled>
        <Icon type="shopping-cart" />
        <span className="nav-text">Cart</span>

      </Menu.Item>
      
     
    </Menu>
    
        </Header>
        <Content style={{margin: '26px', paddingTop: '16px'}}>

            <Route exact path='/new-item' component={NewItem}/>
            <Route exact path='/' component={App}/>
           </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
     
        </div>
     </BrowserRouter>
     );
     
 }

}


export default MyRoutes;