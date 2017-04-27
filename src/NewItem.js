/*eslint-disable*/
import React, { Component } from 'react';
import {Input, InputNumber, Button, notification} from 'antd';
import {Redirect, Route, Switch} from 'react-router-dom';
import * as firebase from 'firebase';

class NewItem extends Component {

constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);   

  }



  componentDidMount() {
      this.databaseRef = firebase.database().ref('items');
  }  
  
  componentWillUnmount() {
      this.databaseRef.off();
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


    this.databaseRef.update(newItemPushed);
 }



 render() {
    return (
    <div> 
    <h3>Add an Item to be Sold</h3>
    <hr/><br/>
      <form onSubmit={this.handleSubmit}>
        <Input placeholder="Item Title" name='title' required/>

        <Input placeholder="Image" name='image'required />
        <Input type="textarea" rows={4}
            placeholder="Description" name='description' required/>
        
        <span>Price: </span><InputNumber placeholder="Price" name='price' defaultValue={100}/>    
        <span>Discount: </span><InputNumber placeholder="Discount" name='discount' defaultValue={0}/>  
        <br/><br/>
        <Button type="primary" htmlType='submit' >Add Item</Button>
      </form>
      
    </div>
    );
     
 }

}

export default NewItem;