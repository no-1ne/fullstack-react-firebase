/*eslint-disable*/
import React, { Component } from 'react';

import './MyCard.css';
import { Card, Row, Col , Button, Badge, Collapse, notification,Icon } from 'antd';

const Panel = Collapse.Panel;

import * as firebase from 'firebase';

class MyCard extends Component {
  
  constructor(props) {
      super(props);
      this.state={
          imagePath: ''
      }
      this.handleImagePathDownload = this.handleImagePathDownload.bind(this);
  }
  
  handleClick(){
      notification.open({
    message: 'Coming Soon!!!',
    description: 'Add to cart, Signup, Sign in, Adding an Item, Checkout coming soon',
    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
  });
  }
  
  handleImagePathDownload(url) {
      console.log(url);
      this.setState({
         imagePath: url 
      });
      
  }
  
  componentDidMount() {
      let storage = firebase.storage();
     let imageRef =  storage.ref(this.props.passedItem.image);
     imageRef.getDownloadURL().then(this.handleImagePathDownload);
  }
  
  render() {
    return (


<Card title={this.props.passedItem.title} 
    extra={<Badge count={this.props.passedItem.discount+"% off"}/>}
    bodyStyle={{ padding: "6px" }} style={{margin: '4px'}}>

    <div className="custom-image">

            <img alt="example" width="100%" height="300" 
                src={this.state.imagePath} />

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