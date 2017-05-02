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
          imagePath: '',
          imageLoading : true
      }
      this.handleImagePathDownload = this.handleImagePathDownload.bind(this);
      this.handleClick = this.handleClick.bind(this);  
 }
  
addCartSuccess(){
  notification.success({
        message: 'Sucessfully Added item to cart',
        description: 'Go ahead an shop more :)'
      });  
}
  
  handleClick(){
      
      if(this.props.loggedInProp != true) {
      notification.error({
        message: 'Please Login',
        description: 'To add to cart, please login'
      });
      
      this.props.showModalLoginWindow();
      } else {
    let newCartItem = {
      price:  this.props.passedItem.price,
      title: this.props.passedItem.title,
      quantity: 1
    }
    
    let newItemPushed = {};

    newItemPushed[''+this.props.loggedInUser.uid+'/'+this.props.itemId] = newCartItem;
    console.log(newItemPushed);
    this.databaseRef.update(newItemPushed).then(this.addCartSuccess);
      }



  }
  
  handleImagePathDownload(url) {
      console.log(url);
      this.setState({
         imagePath: url,
         imageLoading: false
      });
      
  }
  
  componentDidMount() {
      let storage = firebase.storage();
     let imageRef =  storage.ref(this.props.passedItem.image);
     imageRef.getDownloadURL().then(this.handleImagePathDownload);
     this.databaseRef = firebase.database().ref('cart');
  }
  

  
  componentWillUnmount() {
      this.databaseRef.off();
  }
  
  render() {

    if(this.state.imageLoading ==true) {
        return (
        
        <Card loading title="Loading">
            Whatever content
        </Card>
        );
    } else {

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
}

export default MyCard;