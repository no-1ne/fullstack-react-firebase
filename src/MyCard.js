/*eslint-disable*/
import React, { Component } from 'react';

import './MyCard.css';
import { Card, Row, Col , Button, Badge} from 'antd';



class MyCard extends Component {
  render() {
    return (


<Card title={this.props.passedItem.title} bodyStyle={{ padding: "6px" }}>
    <div className="custom-image">
      
      <img alt="example" width="100%" height="300" src={this.props.passedItem.image} />
    </div>
    <div className="custom-card">
      <h3>
        {this.props.passedItem.description} 
        <Badge count={this.props.passedItem.discount+"% off"} style={{left: '8px'}}/>
      </h3>

     <hr/><br/> 

    <Row>
    <Col xs={12}>
        <p>{this.props.passedItem.price} Rs</p>
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
