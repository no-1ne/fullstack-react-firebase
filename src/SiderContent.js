/*eslint-disable*/
import React, { Component } from 'react';
import {Menu, Icon} from 'antd';

export default class SiderContent extends Component {
  render() {
    return (
       
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
      
    
)}}


