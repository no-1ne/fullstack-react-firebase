/*eslint-disable*/
import React, { Component } from 'react';

import './MyCard.css';
import { Card, Row, Col , Button, Badge, Collapse} from 'antd';

const Panel = Collapse.Panel;



class MyCard extends Component {
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
        <Panel header={this.props.passedItem.description.substring(0,25)} key="1">
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
          <Button type="primary" icon="shopping-cart" size="large">Add to cart</Button>
    </Col>
    </Row>
   </div>

  </Card>
    );
  }
}

export default MyCard;