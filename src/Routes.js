/*eslint-disable*/
import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App.js'
import NewItem from './NewItem.js'
import { Row ,Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import HeaderContent from './HeaderContent.js';
import SiderContent from './SiderContent.js';
import FooterContent from './FooterContent.js';

export default class MyRoutes extends Component {
  render() {
    return (
       <BrowserRouter>
       <div>
        
        
    <Layout >
      <Sider breakpoint="md" collapsedWidth="0" style={{ background: '#fff' }}>
      <SiderContent/>

      </Sider>
      <Layout>
        <Header style={{ background: '#fff', lineHeight: '64px' }}>
            <HeaderContent/>
        </Header>
        <Content style={{margin: '26px'}}>
        <Row>
        <Route exact path='/new-item' component={NewItem}/>
        <Route exact path='/' component={App}/>
        </Row>
        </Content>
        <Footer><FooterContent/></Footer>
      </Layout>
    </Layout>
        
        
       </div>
       </BrowserRouter>
   
      
    
)}}


