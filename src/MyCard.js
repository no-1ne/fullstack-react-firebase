/*eslint-disable*/
import React, { Component } from 'react';

import './MyCard.css';
import { Card, Row, Col , Button } from 'antd';



class MyCard extends Component {
  render() {
    return (


<Card title="A tasty thali" bodyStyle={{ padding: "6px" }}>
    <div className="custom-image">
      <img alt="example" width="100%" src="https://thumbs.dreamstime.com/z/indian-thali-26440151.jpg" />
    </div>
    <div className="custom-card">
      <h3>A very nice healthy thali</h3>
     
     <hr/><br/> 

    <Row>
    <Col xs={12}>
        <p>100 Rs</p>
    </Col>
    
    <Col xs={12}>
          <Button type="primary" icon="shopping-cart" size="large">Add to cart</Button>
    </Col>
    </Row>
   </div>
  </Card>
    );
  }
}

export default MyCard;
