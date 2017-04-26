/*eslint-disable*/
import React, { Component } from 'react';

import './MyCard.css';
import { Card, Row, Col , Button, Badge, Collapse, notification,Icon } from 'antd';

const Panel = Collapse.Panel;



class MyCard extends Component {
  
  handleClick(){
      notification.open({
    message: 'Coming Soon!!!',
    description: 'Add to cart, Signup, Sign in, Adding an Item, Checkout coming soon',
    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
  });
  }
  
  render() {
    return (


<Card title={this.props.passedItem.title} 
    extra={<Badge count={this.props.passedItem.discount+"% off"}/>}
    bodyStyle={{ padding: "6px" }} style={{margin: '4px'}}>

    <div className="custom-image">

            <img alt="example" width="100%" height="300" 
                src={this.props.passedItem.image} />

    </div>

    <div className="custom-card">
      
     <Collapse bordered={false}>
        <Panel header={this.props.passedItem.description.substring(0,20)} key="1">
          <div>{this.props.passedItem.description}</div>
        </Panel>
      </Collapse>
         

      


     <hr/><br/> 

    <Row>
    <Col xs={12}>
        <p>
            {this.props.passedItem.price} Rs     
        </p>
    </Col>
    
    <Col xs={12}>
          <Button onClick={this.handleClick} type="primary" icon="shopping-cart" size="large">Add to cart</Button>
    </Col>
    </Row>
   </div>

  </Card>
    );
  }
}

export default MyCard;