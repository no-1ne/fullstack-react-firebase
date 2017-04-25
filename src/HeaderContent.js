/*eslint-disable*/
import React, { Component } from 'react';
import {Menu, Icon} from 'antd';

export default class HeaderContent extends Component {
  render() {
    return (
       
        
    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} style={{float: 'right'}}>
      <Menu.Item key="1" disabled>
        <Icon type="shopping-cart" />
        <span className="nav-text">Cart</span>

      </Menu.Item>
    </Menu>
    
)}}


