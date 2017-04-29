/*eslint-disable*/
import React, { Component } from 'react';
import {Input, InputNumber, Button, notification} from 'antd';
import {Redirect, Route, Switch} from 'react-router-dom';
import * as firebase from 'firebase';

class NewItem extends Component {

constructor(props) {
      super(props);
      this.state = {
          loading: false
      };
      this.handleSubmit = this.handleSubmit.bind(this);   
      this.handleDBSaveSuccess = this.handleDBSaveSuccess.bind(this);
      this.handleDbSaveFail = this.handleDbSaveFail.bind(this);
      this.handleLoginButton = this.handleLoginButton.bind(this);
  }



  componentDidMount() {
      this.databaseRef = firebase.database().ref('items');
  }  
  
  componentWillUnmount() {
      this.databaseRef.off();
  }
 handleDBSaveSuccess() {

     console.log('succcess'+ this.props);
     notification.success({
    message: 'Sucessfully added an item',
    description: 'taking you back to listings page'
  });
  this.props.history.push('/');
 } 
 
 handleDbSaveFail() {
   console.log('failure');
     notification.error({
    message: 'Cannot add the item',
    description: 'Please try again'
  });  
  
  this.setState({
      loading: false
  });
 }

 handleSubmit(event){
    event.preventDefault();
    console.log(event.target.title.value);
    console.log(event.target.description.value);
    console.log(event.target.image.value);
    console.log(event.target.price.value);
    console.log(event.target.discount.value);
    
    let newItem = {
      title:   event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
      image: event.target.image.value,
      discount: event.target.discount.value
    }
    let newItemKey = this.databaseRef.push().key;
    console.log(newItemKey);
    let newItemPushed = {};
    newItemPushed[''+newItemKey] = newItem;
    console.log(newItemPushed);
    console.log(newItem);
    this.setState({
        loading: true
    });
    this.databaseRef.update(newItemPushed).then(this.handleDBSaveSuccess).catch(this.handleDbSaveFail);
 }

handleLoginButton(){
    this.props.showModalLoginWindow();
}

 render() {
     console.log(this.props.loggedInProp);
     
    if(this.props.loggedInProp == true) { 
    return (
    <div> 
    <h3>Add an Item to be Sold</h3>
    <hr/><br/>
      <form onSubmit={this.handleSubmit}>
        <Input placeholder="Item Title" name='title' required/>
        <br/><br/>  
        <Input placeholder="Image" name='image'required />
        <br/><br/>
        <Input type="textarea" rows={4}
            placeholder="Description" name='description' required/>
        <br/><br/>
        <span>Price: </span><InputNumber placeholder="Price" name='price' defaultValue={100}/>    
        <span>Discount: </span><InputNumber placeholder="Discount" name='discount' defaultValue={0}/>  
        <br/><br/>
        <Button type="primary" htmlType='submit' loading={this.state.loading}>Add Item</Button>
      </form>
      
    </div>
    );
    } else {
        return(
        <Button type="primary" onClick={this.handleLoginButton}>Please Login to add an item</Button>
        );
    }

     
 }

}

export default NewItem;